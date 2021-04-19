import "./Home.css";
import mainTheme from "../../components/theme/MainTheme";
import { Box, Container } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import MainHeader from "../../components/header/MainHeader";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(14, 0, 6),
		color: "white",
		backgroundColor: "#121212",
	},
	logo: {
		height: "50px",
	},
	box: {
		textAlign: "center",
		color: theme.palette.text.secondary,
		fontSize: "50px",
	},
}));

function Home() {
	const classes = useStyles();
	return (
		<>
			<ThemeProvider theme={mainTheme}>
				<MainHeader />
				<Container maxWidth="sm" className={classes.box}>
					<Box my={4}>
						<br />
						<img
							className={classes.logo}
							src="logo192.png"
							alt="react logo"
						></img>
						<img
							className={classes.logo}
							src="rust-logo-blk.svg"
							alt="rust logo"
						></img>
					</Box>
				</Container>
			</ThemeProvider>
		</>
	);
}

export default Home;
