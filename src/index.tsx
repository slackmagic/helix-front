import ReactDOM from "react-dom";
import "./index.css";

import { LOGIN_HOST } from "./constants";
import reportWebVitals from "./reportWebVitals";

import App from "./Application";
import { AuthProvider } from "helix-shared-ui-lib";

ReactDOM.render(
	<>
		<AuthProvider login_url={LOGIN_HOST}>
			<App />
		</AuthProvider>
	</>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
