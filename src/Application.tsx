import PrivateRoute from "./components/router/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import { LOGIN_URL, LOGIN_HOST } from "./constants";
import NotFound from "./pages/notfound/NotFound";
import AuthHeader from "./components/header/AuthHeader";

export default function App() {
	return (
		<>
			<AuthHeader />
			<Router history={createBrowserHistory()}>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path={LOGIN_URL}>
						<Login />
					</Route>
					<PrivateRoute path="/dashboard" component={Dashboard} />
					<PrivateRoute path="/somethingElse" component={Dashboard} />
					<Route exact path="*" component={NotFound} />
				</Switch>
			</Router>
		</>
	);
}
