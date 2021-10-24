import { useAuth } from "helix-shared-ui-lib";
import { DEBUG_MODE } from "../../constants";

export default function AuthHeader() {
	const { isAuthenticated, user } = useAuth();
	return (
		<>
			{DEBUG_MODE ? (
				<>
					{isAuthenticated ? (
						<>
							CONNECTED as [{user?.name}] ✔ : {user?.exp}
							{user?.iat}
						</>
					) : (
						<>NOT CONNECTED ❌</>
					)}
				</>
			) : (
				<></>
			)}
		</>
	);
}
