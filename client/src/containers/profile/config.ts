import { ActiveTabId } from './logic/models';

export const tabName: Record<ActiveTabId, string> = {
	[ActiveTabId.Stats]: 'Stats',
	[ActiveTabId.Tasks]: 'Tasks',
	[ActiveTabId.Solution]: 'Solution',
	[ActiveTabId.Social]: 'Social',
	[ActiveTabId.Collections]: 'Collections',
};

export const profilePageTabs = Object.entries(tabName).map(([id, name]) => ({ id, name }));
