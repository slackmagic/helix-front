import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import "./index.css";
import Home from "./pages/home/Home";
import reportWebVitals from "./reportWebVitals";
import PrivateRoute from "./components/auth/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import Private from "./pages/private/Private";
import { LOGIN_URL } from "./constants";
import AuthProvider from "./components/auth/AuthProvider";

ReactDOM.render(
	<AuthProvider>
		<React.StrictMode>
			<Router history={createBrowserHistory()}>
				<Route exact path="/" component={Home} />
				<Route path={LOGIN_URL} component={Dashboard} />
				<PrivateRoute path="/private" component={Private} />
			</Router>
		</React.StrictMode>
	</AuthProvider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();