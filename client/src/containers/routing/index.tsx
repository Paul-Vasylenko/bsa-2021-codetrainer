import React from 'react';
import { Switch } from 'react-router-dom';
import Example from 'containers/example';
import { PublicRoute, SignUp } from 'components';
import SignIn from 'containers/sign-in';

interface IRoutingProps {}

const Routing: React.FC<IRoutingProps> = () => (
	<Switch>
		<PublicRoute exact restricted={false} path="/" component={Example} />
		<PublicRoute exact restricted={false} path="/register" component={SignUp} />
		<PublicRoute exact restricted={false} path="/sign-in" component={SignIn} />
	</Switch>
);

export default Routing;