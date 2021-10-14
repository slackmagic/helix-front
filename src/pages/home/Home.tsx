import "./Home.css";
import {
	Button,
	Collapse,
	Container,
	CssBaseline,
	Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import MainHeader from "../../components/header/MainHeader";
import MainTheme from "../../components/theme/MainTheme";

const customTheme = createTheme(MainTheme, {
	palette: {
		background: {
			default: "#272727",
		},
	},
});

function Home() {
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		setChecked(true);
	}, []);

	return (
		<ThemeProvider theme={customTheme}>
			<div className="root">
				<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
					<>
						<CssBaseline />
						<MainHeader />
						<Container maxWidth="sm">
							<Button variant="contained">Click me</Button>
						</Container>
					</>
				</Collapse>
			</div>
		</ThemeProvider>
	);
}

export default Home;
