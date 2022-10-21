import React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

function SearchFilter({
	city,
	handleCity,
	range,
	handleRange,
	beds,
	handleBeds,
	property,
	handleProperty,
	Reset
}) {
	const Form = {
		minWidth: 120,
		m: 1,
	};
	return (
		<>
			<Box
				sx={{
					mt: 8,
					mx: 2,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
					bgcolor: "white",
					py: 4,
					borderRadius: '20px',
				}}
			>
				<FormControl sx={Form}>
					<InputLabel>Location</InputLabel>
					<Select
						value={city}
						onChange={handleCity}
						autoWidth
						label="Location"
					>
						<MenuItem value={"Kolkata"}>Kolkata</MenuItem>
						<MenuItem value={"Delhi"}>Delhi</MenuItem>
						<MenuItem value={"Mumbai"}>Mumbai</MenuItem>
						<MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
					</Select>
				</FormControl>
				<FormControl sx={Form}>
					<InputLabel>Beds</InputLabel>
					<Select
						value={beds}
						onChange={handleBeds}
						autoWidth
						label="Beds"
					>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={4}>4</MenuItem>
					</Select>
				</FormControl>
				<FormControl sx={Form}>
					<InputLabel>Price</InputLabel>
					<Select
						value={range}
						onChange={handleRange}
						autoWidth
						label="Price"
					>
						<MenuItem value={1}>$ 2000-</MenuItem>
						<MenuItem value={2}>$ 2001 - $ 3000</MenuItem>
						<MenuItem value={3}>$ 3001 - $ 4000</MenuItem>
						<MenuItem value={4}>$ 4000+</MenuItem>
					</Select>
				</FormControl>
				<FormControl sx={Form}>
					<InputLabel id="demo-simple-select-standard-label">
						Property Type
					</InputLabel>
					<Select
						vealue={property}
						onChange={handleProperty}
						autoWidth
						label="Property Type"
					>
						<MenuItem value={"House"}>House</MenuItem>
						<MenuItem value={"Apartment"}>Apartment</MenuItem>
					</Select>
				</FormControl>
				<Button
					variant="contained"
					size="large"
					onClick={Reset}
					p={5}
				>
					Reset Filters
				</Button>
			</Box>
		</>
	);
}

export default SearchFilter;
