import React from 'react';
import Points from './points';
import HonorBreakdown from './honor-breakdown';
import Languages from './languages';
import Community from './community';
import styles from './stats.module.scss';

import RankBreakdown from './rank-breakdown';

interface IStatsProps {}

const Stats: React.FC<IStatsProps> = (props) => {
	return (
		<div className={styles.stats}>
			<Points {...mockPointsProps} />
			<Languages {...mockLanguagesProps} />
			<HonorBreakdown {...mockHonorBreakdownProps} />
			<RankBreakdown {...mockRankBreakDownProps} />
			<Community {...mockCommunityProps} />
		</div>
	);
};
export default Stats;

const mockPointsProps = {
	rank: 7,
	honor: 455,
	completedChallenge: 23,
};

const mockLanguagesProps = {
	languagesTrained: 4,
	highestTrained: 'JS',
	mostRecent: 'JS',
};

const mockHonorBreakdownProps = {
	completedChallengeDone: 5,
	completedChallengeLeft: 10,
	authoredChallengeDone: null,
	authoredChallengeLeft: 0,
	commentsDone: null,
	commentsLeft: 0,
	referralsDone: null,
	referralsLeft: 0,
	achievementsDone: 8,
	achievementsLeft: 9,
};

const mockRankBreakDownProps = {
	rankProgress: 25,
	rank: 8,
};

const mockCommunityProps = {
	comments: 3,
	collections: 2,
	transactions: 12,
};
