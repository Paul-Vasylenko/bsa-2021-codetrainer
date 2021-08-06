export interface IChallengeStatsProps {
	favoriteSaves: number;
	positiveFeedback: number;
	author: {
		firstName: string;
		lastName: string;
		link: string;
	};
}

export interface IChallengeHeaderProps {
	title: string;
	rank: number;
	link: string;
}

export type TChallengeTagsProps = Array<string>;

export interface IChallengeProps {
	author: {
		firstName: string;
		lastName: string;
		link: string;
	};
	link: string;
	title: string;
	rank: number;
	stats: {
		favoriteSaves: number;
		positiveFeedback: number;
	};
	tags: TChallengeTagsProps;
}

export default IChallengeProps;