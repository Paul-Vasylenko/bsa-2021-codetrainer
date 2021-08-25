import React from 'react';
import styles from './stats.module.scss';
import { Item } from './item';

export const Stats = () => {
	return (
		<div className={styles.stats}>
			<h3>Stats</h3>
			<div className={styles.data}>
				<Item item="Created" value="Oct 21, 2013" />
				<Item item="Created" value="Oct 21, 2013" />
				<Item item="Created" value="Oct 21, 2013" />
				<Item item="Created" value="Oct 21, 2013" />
				<Item item="Created" value="Oct 21, 2013" />
				<Item item="Created" value="Oct 21, 2013" />
				<Item item="Created" value="Oct 21, 2013" />
				<Item item="Created" value="Oct 21, 2013" />
				<Item item="Created" value="Oct 21, 2013" />
			</div>
		</div>
	);
};