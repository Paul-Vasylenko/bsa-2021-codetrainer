import React, { PropsWithChildren, FC } from 'react';
import background from 'assets/cover-background.svg';
import logo from 'assets/logo.svg';
import styles from './cover.module.scss';

const CoverLayout: FC<PropsWithChildren<any>> = (props) => {
	return (
		<div className={styles.cover}>
			<div className={styles.image}>
				<img className={styles.background} src={background} alt=""/>
				<img className={styles.logo} src={logo} alt="codetrainer"/>
			</div>
			<div className={props.className}>
				{props.children}
			</div>
		</div>
	);
};

export default CoverLayout;
