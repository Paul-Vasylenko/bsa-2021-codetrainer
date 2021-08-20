import { ISearchPageProps } from 'components/pages/search-page';
import { ISearchState } from './logic/state';

export const mapSearchData = (data: ISearchState['search']): ISearchPageProps['data'] => {
	return {
		tags: data?.tags || [],
		ranks: (data?.ranks || []).map(({ rank }) => rank).sort((a, b) => a - b),
		challenges: (data?.tasks || []).map((task) => ({
			id: task.id,
			title: task.name,
			rank: task.rank,
			tags: task.tags.map((tag) => tag.name),
			linkToAuthor: '/',
			author: {
				firstName: task?.user?.name || '',
				lastName: task?.user?.surname || '',
				link: '/',
			},
			stats: {
				favoriteSaves: 0,
				positiveFeedback: 0,
			},
		})),
	};
};

export const mapFilterToSearch = (filter: ISearchState['filter']): Record<string, any> => {
	const filterMod = Object.fromEntries(
		Object.entries(filter).filter(([_key, value]) => {
			if (typeof value !== 'string') {
				return Boolean(value);
			}
			return Boolean(value.length);
		}),
	);
	return {
		...filterMod,
		...(Boolean(filter.tags.size) ? { tags: Array.from(filter.tags).join(',') } : {}),
	};
};
