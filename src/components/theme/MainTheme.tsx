import { createTheme } from "@mui/material/styles";
import { pink, deepPurple } from "@mui/material/colors";

/*
main : 252b3d
main lighter: 404868
*/

const mainTheme = createTheme({
	palette: {
		mode: "dark",
		primary: pink,
		secondary: deepPurple,
	},
	typography: {
		fontFamily: [
			"Roboto Condensed",
			"Roboto",
			"Roboto Slab",
			"Share Tech Mono",
		].join(","),
	},
});
export default mainTheme;
