import React from 'react';
import styles from './profile.module.scss';
import { ProfileBio } from './profile-bio';
import { ProfileInfo } from './profile-info';

interface IProfileProps {
	match: {
		params: {
			name: string;
		};
	};
}

const mockProfileBioProps = {
	img: 'https://hyperhost.ua/info/storage/avatars/user-ava.png',
	name: 'name',
	nickname: 'nickname',
	clan: 'clan',
	memberSince: '14 jul',
	lastSeen: '13 sep',
	gitHub: 'github link',
	following: 0,
	followers: 0,
	community: 3,
};

export const Profile: React.FC<IProfileProps> = (props) => {
	return (
		<div className={styles.profile}>
			<ProfileBio {...mockProfileBioProps} />
			<ProfileInfo />
		</div>
	);
};