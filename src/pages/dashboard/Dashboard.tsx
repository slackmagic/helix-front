import { Container, CssBaseline } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Menu from "../../components/menu/Menu";
import HeaderAppBar from "../../components/appbar/HeaderAppBar";
import { useAuth } from "helix-shared-ui-lib";
import LoginForm from "../../components/login/LoginForm";
import mainTheme from "../../components/theme/MainTheme";

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: "100vh",
		background: "linear-gradient(45deg, #206596 30%, #4d3066 90%)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		padding: theme.spacing(0, 0, 6),
	},
}));

export default function Dashboard() {
	const classes = useStyles();
	const { isAuthenticated } = useAuth();
	return (
		<div className={classes.root}>
			<ThemeProvider theme={mainTheme}>
				<CssBaseline />
				<HeaderAppBar />
				<Container maxWidth="sm">
					{isAuthenticated ? <Menu /> : <LoginForm />}
				</Container>
			</ThemeProvider>
		</div>
	);
}
