import { CardContent, Typography } from "@material-ui/core";
import { useAuth } from "helix-shared-ui-lib";

export default function MenuUser() {
	const { user } = useAuth();

	return (
		<>
			<CardContent>
				<Typography variant="h5" component="h4">
					Hello {user?.name}
				</Typography>
				{user?.user_uuid}
			</CardContent>
		</>
	);
}
