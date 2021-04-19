import mainTheme from "../../components/theme/MainTheme";
import { Container, Button, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import MainHeader from "../../components/header/MainHeader";
import Menu from "../../components/menu/Menu";
import Login from "../../components/login/Login";
import { useAuth } from "../../components/auth/AuthHook";

export default function Dashboard() {
	const { user, isAuthenticated, logout } = useAuth();

	const handleLogout = () => {
		logout();
	};

	return (
		<>
			<ThemeProvider theme={mainTheme}>
				<MainHeader reduced={isAuthenticated} />
				<Container maxWidth="sm">
					{isAuthenticated ? (
						<>
							<Menu />
							<Box my={4}>
								Hello {user?.name}
								<br />
								USER UUID: {user?.user_uuid}
								<br />
								<Button variant="contained" onClick={handleLogout}>
									🚪 LOGOUT
								</Button>
							</Box>
						</>
					) : (
						<Login />
					)}
				</Container>
			</ThemeProvider>
		</>
	);
}
