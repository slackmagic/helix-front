//import "./MainHeader.css";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { APP_TITLE, APP_SUBTITLE } from "../../constants";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(14, 0, 6),
		color: "white",
		backgroundColor: "#121212",
	},
	mainHeader: {
		padding: theme.spacing(5, 0, 5),
		color: "white",

		maxWidth: "100%",
	},
	mainTitle: {
		fontFamily: "Share Tech Mono",
	},
	logo: {
		height: "200px",
		filter: "drop-shadow(2px 0px 5px  #222222)",
	},
}));

export default function MainHeader() {
	const classes = useStyles();

	return (
		<>
			<Container className={classes.mainHeader}>
				<Typography
					component="h1"
					variant="h2"
					align="center"
					className={classes.mainTitle}
				>
					<img className={classes.logo} src="helix-logo.svg" alt="logo"></img>
					<br />
					{APP_TITLE}
				</Typography>
				<Typography variant="h6" align="center" paragraph>
					{APP_SUBTITLE}
				</Typography>
			</Container>
		</>
	);
}
