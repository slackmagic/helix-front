import "./ApplicationBar.css";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useAuth } from "helix-shared-ui-lib";
import ApplicationBarUser from "./ApplicationBarUser";

export default function ApplicationBar() {
	const { isAuthenticated } = useAuth();

	return (
		<>
			<AppBar position="static" className="mainAppBar">
				<Toolbar>
					<img className="logo" src="helix-logo.svg" alt="logo"></img>
					<Typography variant="h6" className="title">
						HELIX
					</Typography>
					{isAuthenticated ? <ApplicationBarUser /> : <>not connected</>}
				</Toolbar>
				<div className="bottomBar"></div>
			</AppBar>
		</>
	);
}
