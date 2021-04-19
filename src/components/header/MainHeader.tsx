import React from "react";
import "./MainHeader.css";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { APP_TITLE, APP_SUBTITLE } from "../../constants";
import AnimatedHeader from "./AnimatedHeader";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(14, 0, 6),
		color: "white",
		backgroundColor: "#121212",
	},
	mainHeader: {
		padding: theme.spacing(5, 0, 5),
		color: "white",
		backgroundColor: "#121212",
		maxWidth: "100%",
	},
	mainTitle: {
		fontFamily: "Share Tech Mono",
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(5),
	},

	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

type HeaderProps = {
	reduced?: boolean;
};

export default function MainHeader({ reduced }: HeaderProps) {
	const classes = useStyles();

	return (
		<>
			<Container className={classes.mainHeader}>
				<AnimatedHeader />

				<Typography
					component="h1"
					variant="h2"
					align="center"
					className={classes.mainTitle}
				>
					{APP_TITLE}
				</Typography>
				<Typography variant="h6" align="center" paragraph>
					{reduced ? <>TO REDUCE</> : <>{APP_SUBTITLE}</>}
				</Typography>
			</Container>
		</>
	);
}
