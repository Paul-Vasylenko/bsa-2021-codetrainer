import { TSortCallback } from '../../../types';
import { SortOptions } from 'containers/clans/logic/state';

export interface IClansSortProps {
	sortByTime: TSortCallback;
	sortByRank: TSortCallback;
	sortBySize: TSortCallback;
	currentSort: SortOptions;
}