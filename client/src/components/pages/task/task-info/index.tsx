import React from 'react';
import styles from './task-info.module.scss';
import { Challenge } from 'components';
import { Button } from 'components/basic';
import { ButtonClasses } from 'components/basic/button';
import clsx from 'clsx';
import { IChallenge } from 'components/common/challenge/types';

export interface ITaskInfoProps {
	challengeProps: IChallenge;
}

export const TaskInfo = ({ challengeProps }: ITaskInfoProps) => {
	return (
		<div className={styles.taskInfo}>
			<Challenge {...challengeProps} showAddToCollection={false} />
			<div className={styles.buttonsBlock}>
				<Button className={clsx(ButtonClasses.red, ButtonClasses.filled)}>Train</Button>
				<Button className={clsx(ButtonClasses.red, styles.skipButton)}>Skip</Button>
			</div>
		</div>
	);
};