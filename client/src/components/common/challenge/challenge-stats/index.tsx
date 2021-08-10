import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import styles from './challenge-stats.module.scss';
import { IChallengeStats } from '../types';

const ChallengeStats: React.FC<{ stats: IChallengeStats }> = ({
	stats: { favoriteSaves, positiveFeedback, author },
}) => {
	return (
		<div className={styles.challengeStats}>
			<div className={styles.challengeStatsItem}>
				<p className={styles.challengeStatsItemText}>
					{/* @ts-ignore */}
					<Icon icon="star-empty" className={styles.challengeStatsItemIcon} />
					{favoriteSaves} saved to favorites
				</p>
			</div>
			<div className={styles.challengeStatsItem}>
				<p className={styles.challengeStatsItemText}>
					{/* @ts-ignore */}
					<Icon icon="vertical-bar-chart-asc" className={styles.challengeStatsItemIcon} />
					{positiveFeedback} positive feedback
				</p>
			</div>
			<div className={styles.challengeStatsItem}>
				<p className={styles.challengeStatsItemText}>
					{/* @ts-ignore */}
					<Icon icon="user" className={styles.challengeStatsItemIcon} />
					created{' '}
					<Link to={author.link} className={styles.challengeStatsItemLink}>
						{author.firstName} {author.lastName}
					</Link>
				</p>
			</div>
		</div>
	);
};

export default ChallengeStats;
