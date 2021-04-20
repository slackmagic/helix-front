import React from "react";
import {IUser} from "helix-shared-tsx";

type AuthContextType = {
	user?: IUser;
	isAuthenticated: boolean;
	authenticate: (login: string, password: string) => void;
	logout: () => void;
};

const contextDefaultValues: AuthContextType = {
	user: undefined,
	isAuthenticated: false,
	authenticate: (login: string, password: string) => null,
	logout: async () => null,
};

const AuthContext = React.createContext<AuthContextType>(contextDefaultValues);

export default AuthContext;
