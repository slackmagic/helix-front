//import "./Home.css";
import { Collapse, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import MainTheme from "../../components/theme/MainTheme";

function Home() {
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		setChecked(true);
	}, []);

	return (
		<ThemeProvider theme={MainTheme}>
			<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
				<>
					<CssBaseline />⭐ HELIX
				</>
			</Collapse>
		</ThemeProvider>
	);
}

export default Home;
