import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HouseIcon from "@mui/icons-material/House";
import Button from "@mui/material/Button";

function NavBar() {
	const ButtonStyle = {
		mx: "4px",
	};

	const ButtonStyleSelected = {
		mx: "4px",
		color: "primary",
		bgcolor: "secondary",
	};
	return (
		<>
			<AppBar color="default" position="static">
				<Toolbar>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							mr: "16px",
						}}
					>
						<HouseIcon
							sx={{
								mr: "8px",
							}}
						/>
						<Typography>Estatery</Typography>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							px: "8px",
						}}
					>
						<Button variant="text" sx={ButtonStyleSelected}>
							Rent
						</Button>
						<Button variant="text" sx={ButtonStyle}>
							Buy
						</Button>
						<Button variant="text" sx={ButtonStyle}>
							Sell
						</Button>
						<Button variant="text" sx={ButtonStyle}>
							Manage Property
						</Button>
						<Button variant="text" sx={ButtonStyle}>
							Resources
						</Button>
					</Box>
					<Box>
						<Button
							variant="outlined"
							sx={{
								mr: "16px",
							}}
						>
							Login
						</Button>
						<Button variant="contained">Sign Up</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default NavBar;
