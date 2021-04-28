//import "./Home.css";
import { Collapse, CssBaseline } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import MainHeader from "../../components/header/MainHeader";
import MainTheme from "../../components/theme/MainTheme";

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: "100vh",
		background: "linear-gradient(45deg, #206596 30%, #4d3066 90%)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		padding: theme.spacing(6, 0, 6),
	},
}));

function Home() {
	const classes = useStyles();
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		setChecked(true);
	}, []);

	return (
		<div className={classes.root}>
			<ThemeProvider theme={MainTheme}>
				<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
					<>
						<CssBaseline />
						<MainHeader />
					</>
				</Collapse>
			</ThemeProvider>
		</div>
	);
}

export default Home;
