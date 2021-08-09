import { ApiPath, AuthApiPath } from '../../enum';

export const WHITE_ROUTES = [
	`${ApiPath.AUTH}${AuthApiPath.LOGIN}`,
	`${ApiPath.AUTH}${AuthApiPath.REGISTER}`,
	`${ApiPath.AUTH}${AuthApiPath.TOKEN_REFRESH}`,
];
