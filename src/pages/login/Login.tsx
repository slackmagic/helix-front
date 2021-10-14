import { Container, CssBaseline } from "@mui/material";
import LoginForm from "../../components/login/LoginForm";
import { useAuth } from "helix-shared-ui-lib";

export default function Login() {
	const { isAuthenticated } = useAuth();
	return (
		<div>
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
		</div>
	);
}
