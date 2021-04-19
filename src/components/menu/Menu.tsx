import React, { useState } from "react";
import {
	Tab,
	Tabs,
} from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import PersonIcon from "@material-ui/icons/Person";

export default function Menu() {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleChange = (
		event: React.ChangeEvent<any>,
		newIndexValue: number
	) => {
		console.log(newIndexValue);
		setSelectedIndex(newIndexValue);
	};

	return (
		<>
			{" "}
			<Tabs
				value={selectedIndex}
				onChange={handleChange}
				variant="fullWidth"
				indicatorColor="secondary"
				textColor="secondary"
				aria-label="icon label tabs example"
			>
				<Tab icon={<AppsIcon />} label="APPLICATIONS" />
				<Tab icon={<PersonIcon />} label="PROFILE" />
			</Tabs>
		</>
	);
}
