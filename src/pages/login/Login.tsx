import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import LoginForm from "../../components/login/LoginForm";
import { useAuth } from "helix-shared-ui-lib";
import mainTheme from "../../components/theme/MainTheme";

export default function Login() {
	const { isAuthenticated } = useAuth();
	return (
		<ThemeProvider theme={mainTheme}>
			<CssBaseline />
			<Container maxWidth="sm">
				{isAuthenticated ? (
					<>
						<h1>Connected</h1>
					</>
				) : (
					<LoginForm />
				)}
			</Container>
		</ThemeProvider>
	);
}
