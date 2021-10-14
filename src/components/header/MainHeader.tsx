import "./MainHeader.css";
import { Container, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { APP_TITLE, APP_SUBTITLE } from "../../constants";
import mainTheme from "../theme/MainTheme";

export default function MainHeader() {
	return (
		<Container className="mainHeader">
			<Typography
				component="h1"
				variant="h2"
				align="center"
				className="mainTitle"
			>
				<img src="helix-logo.svg" alt="logo" className="logoHeader" />
				<br />
				{APP_TITLE}
			</Typography>
			<Typography variant="h6" align="center" paragraph>
				{APP_SUBTITLE}
			</Typography>
		</Container>
	);
}
