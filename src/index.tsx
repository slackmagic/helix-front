import React from "react";
import { Router, Route } from "react-router";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import "./index.css";

import Home from "./pages/home/Home";
import Private from "./pages/private/Private";
import Login from "./pages/login/Login";

import { LOGIN_URL, LOGIN_HOST } from "./constants";
import reportWebVitals from "./reportWebVitals";
import PrivateRoute from "./components/router/PrivateRoute";
import { AuthProvider } from "helix-shared-ui-lib";
import Dashboard from "./pages/dashboard/Dashboard";

ReactDOM.render(
	<AuthProvider login_url={LOGIN_HOST}>
		<Router history={createBrowserHistory()}>
			<Route exact path="/" component={Home} />
			<Route path={LOGIN_URL} component={Login} />
			<Route path="/dashboard" component={Dashboard} />
		</Router>
	</AuthProvider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
