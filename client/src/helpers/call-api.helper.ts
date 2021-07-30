import qs from 'qs';
import { LocalStorageKeys } from 'constants/local-storage-keys';

interface IRequestArgs {
	endpoint: string;
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	skipAuthorization?: boolean;
	query?: Record<string, any>;
	body?: any;
}

type TBody =
	| string
	| Blob
	| ArrayBufferView
	| ArrayBuffer
	| FormData
	| URLSearchParams
	| ReadableStream<Uint8Array>
	| null
	| undefined;

export default async function callWebApi(args: IRequestArgs): Promise<Response> {
	try {
		const res: Response = await fetch(getUrl(args), getArgs(args));
		return res;
	} catch (err) {
		throw err;
	}
}

const API = '/api/';

const getUrl = (args: IRequestArgs): RequestInfo =>
	API + args.endpoint + (args.query ? `?${qs.stringify(args.query)}` : '');

const getArgs = (args: IRequestArgs): RequestInit => {
	const headers: Headers | string[][] | Record<string, string> | undefined = {};
	const token = sessionStorage.getItem(LocalStorageKeys.SESSION_TOKEN);
	let body: TBody;

	if (token && !args.skipAuthorization) {
		headers.Authorization = `Bearer ${token}`;
	}

	if (args.body) {
		if (args.method === 'GET') {
			throw new Error('GET request does not support request body.');
		}
		body = JSON.stringify(args.body);
		headers['Content-Type'] = 'application/json';
		headers.Accept = 'application/json';
	}

	return {
		method: args.method,
		headers,
		...(args.method === 'GET' ? {} : { body }),
	};
};
