import {
	Card,
	Container,
	CssBaseline,
	Grid,
	Paper,
	ThemeProvider,
	Typography,
} from "@mui/material";

import mainTheme from "../../components/theme/MainTheme";
import ApplicationBar from "../../components/appbar/ApplicationBar";
import { useAuth } from "helix-shared-ui-lib";
import "./Dashboard.css";

export default function Dashboard() {
	const { user } = useAuth();

	const capitalize = (toProcess: undefined | string) => {
		return toProcess
			? toProcess.charAt(0).toUpperCase() + toProcess.slice(1)
			: "";
	};

	return (
		<ThemeProvider theme={mainTheme}>
			<div className="root">
				<CssBaseline />
				<ApplicationBar />
				<Container maxWidth="md" className="dashboard-container">
					<Paper className="dashboard-header">
						<Typography variant="h4">
							Welcome {capitalize(user?.name)},
						</Typography>
						<Typography color="primary">{user?.user_uuid}</Typography>
					</Paper>
					<Grid container spacing={2}>
						<Grid item xs={6} md={4} lg={3}>
							<Paper className="dashboard-menu">APPLICATION</Paper>
						</Grid>
						<Grid item xs={6} md={4} lg={3}>
							<Paper className="dashboard-menu">APPLICATION</Paper>
						</Grid>
						<Grid item xs={6} md={4} lg={3}>
							<Paper className="dashboard-menu">APPLICATION</Paper>
						</Grid>
						<Grid item xs={6} md={4} lg={3}>
							<Paper className="dashboard-menu">APPLICATION</Paper>
						</Grid>
					</Grid>
				</Container>
			</div>
		</ThemeProvider>
	);
}
