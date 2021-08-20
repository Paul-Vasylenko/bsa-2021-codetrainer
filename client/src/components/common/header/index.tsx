import React, { useState, useCallback } from 'react';
import { ClickAwayListener } from '@material-ui/core';
import { Avatar, Label } from 'components';
import ThemeSwitcher from '../../../containers/theme-switcher';
import styles from './header.module.scss';
import bellImg from 'assets/icons/header/bell.svg';
import { TNotification } from 'typings/common/INotification';
import Notification, { mapNotificationToProps } from '../notification';

export interface IHeaderProps {
	name: string;
	rank: number;
	notifications: TNotification[];
	mark: number;
	avatar?: string;
	listItems: Array<IListItem>;
	onReadNotification: (id: string) => void;
}

interface IListItem {
	icon: React.ElementType;
	text: string;
	id: string;
	onClick?: () => void;
}

const Header: React.FC<IHeaderProps> = (props) => {
	const [isListVisible, setListVisibility] = useState(false);
	const [isNotificationsVisible, setNotificationsVisibility] = useState(false);

	const getListItem = ({ icon: Icon, text, id, onClick = () => {} }: IListItem) => {
		return (
			<li
				className={styles.navigationItem}
				key={id}
				onClick={() => {
					onClick();
					setListVisibility(false);
				}}
			>
				<div className={styles.navigationLink}>
					<Icon className={styles.icon} />
					<span>{text}</span>
				</div>
			</li>
		);
	};

	const renderList = (items: IListItem[]) => {
		return <ul className={styles.navigationList}>{items.map((item: IListItem) => getListItem(item))}</ul>;
	};

	const unreadedCounter = props.notifications.filter((notification) => !notification.read).length;

	return (
		<div className={styles.header}>
			<ThemeSwitcher />
			<ClickAwayListener onClickAway={() => setListVisibility(false)}>
				<div className={styles.bell} onClick={() => setNotificationsVisibility(false)}>
					<img src={bellImg} alt="bell" />
					{unreadedCounter !== 0 ? (
						<div className={styles.bellCounter}>
							<span>{unreadedCounter}</span>
						</div>
					) : null}
					{isNotificationsVisible ? (
						<div className={styles.notifications}>
							{props.notifications.length !== 0 ? (
								props.notifications.map((notification) => (
									<Notification
										{...mapNotificationToProps(notification)}
										onRead={() => props.onReadNotification(notification.id)}
										key={notification.id}
									/>
								))
							) : (
								<div className={styles.noNotifications}>You do not have any notifications</div>
							)}
						</div>
					) : null}
				</div>
			</ClickAwayListener>
			<span className={styles.name}>{props.name}</span>
			<ClickAwayListener onClickAway={() => setListVisibility(false)}>
				<div className={styles.avatarCover}>
					<div onClick={() => setListVisibility(!isListVisible)}>
						<Avatar avatar={props.avatar} size={61} color="#EC4179" />
					</div>

					{isListVisible && <div className={styles.navigation}>{renderList(props.listItems)}</div>}
				</div>
			</ClickAwayListener>
		</div>
	);
};

const bell = (
	<svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.0155 23.5C8.22365 23.5 6.7655 22.0419 6.7655 20.25C6.7655 20.1121 6.87764 20 7.0155 20C7.15336 20 7.2655 20.1121 7.2655 20.25C7.2655 21.7673 8.49848 23 10.0155 23C11.5327 23 12.7655 21.7672 12.7655 20.25C12.7655 20.1121 12.8776 20 13.0155 20C13.1534 20 13.2655 20.1121 13.2655 20.25C13.2655 22.0419 11.8074 23.5 10.0155 23.5Z" />
		<path d="M1.28292 18.6761L1.28097 18.6778C1.1874 18.7577 1.01562 18.9463 1.01562 19.2501C1.01562 19.6621 1.35356 20 1.76556 20H18.2656C18.6775 20 19.0157 19.6623 19.0157 19.2501C19.0157 18.9478 18.8454 18.7589 18.7514 18.679L18.7504 18.6782C17.0117 17.2081 16.0157 15.0617 16.0157 12.7881V9.99994C16.0157 6.69083 13.3248 4 10.0156 4C6.70646 4 4.01562 6.69084 4.01562 9.99994V12.7881C4.01562 15.0618 3.01954 17.2081 1.28292 18.6761ZM1.76556 20.5C1.07674 20.5 0.515625 19.9389 0.515625 19.2501C0.515625 18.8844 0.674428 18.5387 0.951647 18.3007C2.58393 16.921 3.51562 14.9141 3.51562 12.7881V9.99994C3.51562 6.41622 6.43184 3.5 10.0156 3.5C13.5995 3.5 16.5157 6.41623 16.5157 9.99994V12.7881C16.5157 14.914 17.4473 16.9212 19.0701 18.2942C19.3581 18.54 19.5157 18.886 19.5157 19.2501C19.5157 19.9389 18.9546 20.5 18.2656 20.5H1.76556Z" />
		<path d="M10.0155 4C9.87764 4 9.7655 3.88786 9.7655 3.75V0.75C9.7655 0.612141 9.87764 0.5 10.0155 0.5C10.1534 0.5 10.2655 0.612141 10.2655 0.75V3.75C10.2655 3.88786 10.1534 4 10.0155 4Z" />
	</svg>
);

export default Header;
