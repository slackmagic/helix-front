import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import LoginForm from "../../components/login/LoginForm";
import mainTheme from "../../components/theme/MainTheme";
import ApplicationBar from "../../components/appbar/ApplicationBar";
import { useAuth } from "helix-shared-ui-lib";

export default function Dashboard() {
	const { isAuthenticated } = useAuth();
	return (
		<ThemeProvider theme={mainTheme}>
			<div className="root">
				<CssBaseline />
				<ApplicationBar />
				<Container maxWidth="sm">
					{isAuthenticated ? (
						<>
							<h1>Connected</h1>
						</>
					) : (
						<LoginForm />
					)}
				</Container>
			</div>
		</ThemeProvider>
	);
}
