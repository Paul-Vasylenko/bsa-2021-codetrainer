import React from 'react';
import { Switch } from 'react-router-dom';
import Example from 'containers/example';
import { PublicRoute } from 'components';

interface IRoutingProps { }

const Routing: React.FC<IRoutingProps> = () => (
	<Switch>
		<PublicRoute exact restricted={false} path="/" component={Example} />
	</Switch>
);

export default Routing;