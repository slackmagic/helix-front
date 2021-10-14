import React, { useState, useEffect } from "react";
import {
	Button,
	Card,
	CardContent,
	TextField,
	Typography,
} from "@mui/material";
import { useAuth } from "helix-shared-ui-lib";

export default function LoginForm() {
	const { authenticate } = useAuth();
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	useEffect(() => {
		setIsButtonDisabled(
			login.trim().length === 0 || password.trim().length === 0
		);
	}, [login, password]);

	const handleLogin = () => {
		authenticate({ login, password });
	};

	const handleKeyPress = (e: React.KeyboardEvent<any>) => {
		if (e.keyCode === 13 || e.which === 13) {
			isButtonDisabled || handleLogin();
		}
	};

	return (
		<Card>
			<div>
				<Typography variant="h5" component="h2">
					Se connecter
				</Typography>
			</div>
			<CardContent>
				<form noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="login"
						label="Login"
						name="login"
						autoComplete="login"
						autoFocus
						onChange={(e) => setLogin(e.target.value)}
						onKeyPress={(e) => handleKeyPress(e)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Mot de passe"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={(e) => setPassword(e.target.value)}
						onKeyPress={(e) => handleKeyPress(e)}
					/>
					<Button
						fullWidth
						variant="contained"
						color="primary"
						disabled={isButtonDisabled}
						onClick={() => handleLogin()}
					>
						Se connecter
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
