import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import Example from 'containers/example';
import { CreateTaskPage } from 'containers/create-new-task';
import HomePage from 'containers/home-page';
import SettingPage from 'containers/setting-page';
import { Profile } from 'containers/profile';
import { FullscreenLoader, PrivateRoute, PublicRoute, ForgotPassword, ChangePassword, SearchPage } from 'components';
import SignIn from 'containers/sign-in';
import SignUp from 'containers/sign-up';
import { ROUTES } from 'constants/routes';
import { useAppSelector } from 'hooks/useAppSelector';
import * as actions from './logic/actions';
import { AuthAccessToken } from './logic/state';
import TestPrivate from './test-private';

interface IRoutingProps {}

const Routing: React.FC<IRoutingProps> = () => {
	const { accessToken } = useAppSelector((state) => state.routing);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(actions.checkRefreshToken());
	}, [dispatch]);
	if (accessToken === AuthAccessToken.LOADING) {
		return <FullscreenLoader />;
	}
	return (
		<Switch>
			<PublicRoute
				exact
				restricted={false}
				path={ROUTES.Main}
				component={Example}
				needHeader={false}
				needSideBar={false}
			/>
			<PrivateRoute path={ROUTES.Main} component={HomePage} needHeader={true} needSideBar={true} />
			<PrivateRoute path={ROUTES.UserProfile} component={Profile} needHeader={true} needSideBar={true} />
			<PrivateRoute exact path={ROUTES.Search} component={SearchPage} needHeader={true} needSideBar={true} />
			<PrivateRoute path="/setting" component={SettingPage} needHeader={true} needSideBar={true} />
			<PublicRoute
				exact
				restricted={false}
				path={ROUTES.SignUp}
				component={SignUp}
				needHeader={false}
				needSideBar={false}
			/>
			<PublicRoute
				exact
				restricted={false}
				path={ROUTES.SignIn}
				component={SignIn}
				needHeader={false}
				needSideBar={false}
			/>
			<PublicRoute
				exact
				restricted={false}
				path={ROUTES.ForgotPassword}
				component={ForgotPassword}
				needHeader={false}
				needSideBar={false}
			/>
			<PublicRoute
				exact
				restricted={false}
				path={ROUTES.ChangePassword}
				component={ChangePassword}
				needHeader={false}
				needSideBar={false}
			/>
			<PublicRoute
				exact
				restricted={false}
				path="/task/new"
				component={CreateTaskPage}
				needHeader={false}
				needSideBar={false}
			/>

			<PrivateRoute path="/private" component={TestPrivate} needHeader={false} needSideBar={false} />
		</Switch>
	);
};

export default Routing;
