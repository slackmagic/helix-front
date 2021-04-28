import React, { useState } from "react";
import { Card, makeStyles, Tab, Tabs } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import PersonIcon from "@material-ui/icons/Person";
import MenuApp from "./MenuUser";
import MenuUser from "./MenuApp";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(6, 0, 0, 0),
		color: "white",
	},
	card: {
		backgroundColor: "rgba(255, 255, 255, .5)",
		//
	},
	tabs: {
		color: "white",
		backgroundColor: "rgba(200, 0, 200, .5)",
	},
	header: {
		backgroundColor: "rgba(200, 0, 200, .5)",
		padding: theme.spacing(2),
		color: "white",
	},
	form: {
		width: "100%", // Fix IE 11 issue.
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Menu() {
	const classes = useStyles();
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleChange = (
		event: React.ChangeEvent<any>,
		newIndexValue: number
	) => {
		console.log(newIndexValue);
		setSelectedIndex(newIndexValue);
	};

	return (
		<div className={classes.root}>
			<Card className={classes.card}>
				<Tabs
					className={classes.tabs}
					value={selectedIndex}
					onChange={handleChange}
					variant="fullWidth"
				>
					<Tab icon={<AppsIcon />} label="APPLICATIONS" />
					<Tab icon={<PersonIcon />} label="PROFILE" />
				</Tabs>
				{selectedIndex === 0 ? <MenuApp /> : <MenuUser />}
			</Card>
		</div>
	);
}
