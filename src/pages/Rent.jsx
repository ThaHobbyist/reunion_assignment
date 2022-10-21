import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import NavBar from "../components/NavBar";
import SearchFilter from "../components/SearchFilter";
import Catalogue from "../components/Catalogue";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const DATA = require("../Catalogue.json");
const Data = DATA.Catalogue;

function Rent() {
	const [searchValue, setSearchValue] = useState("");
	const [city, setCity] = useState("");
	const [range, setRange] = useState(0);
	const [lprice, setLprice] = useState(0);
	const [hprice, setHprice] = useState(0);
	const [beds, setBeds] = useState(0);
	const [property, setProperty] = useState("");
	const [filteredData, setFilteredData] = useState(Data);

	useEffect(() => {
		let temp = Data.filter((data) => {
			return data.Name.toLowerCase().includes(searchValue.toLowerCase());
		})
			.filter((data) => {
				if (city === "") return data;
				return data.City.indexOf(city) >= 0;
			})
			.filter((data) => {
				if (beds === 0) return data;
				return data.Beds === beds;
			})
			.filter((data) => {
				if (lprice === 0) return data;
				return data.Price > lprice;
			})
			.filter((data) => {
				if (hprice === 0) return data;
				else {
					return data.Price <= hprice;
				}
			})
			.filter((data) => {
				if (property === "") return data;
				return data.Type.indexOf(property) >= 0;
			});

		setFilteredData(temp);
	}, [searchValue, city, beds, lprice, hprice, property]);

	const handleCity = (e) => {
		setCity(e.target.value);
	};

	const handleBeds = (e) => {
		setBeds(e.target.value);
	};

	useEffect(() => {
		let lp = 0;
		let hp = 0;

		switch (range) {
			case 1:
				hp = 2000;
				break;
			case 2:
				lp = 2001;
				hp = 3000;
				break;
			case 3:
				lp = 3001;
				hp = 4000;
				break;
			case 4:
				lp = 4000;
				hp = 0;
				break;
			default:
				lp = 0;
				hp = 0;
		}

		setHprice(hp);
		setLprice(lp);
	}, [range]);

	const handleRange = (e) => {
		let tmp = e.target.value;
		setRange(tmp);
	};

	const handleProperty = (e) => {
		setProperty(e.target.value);
	};

	const Reset = () => {
		setCity("");
		setBeds(0);
		setRange(0);
		setProperty("");
	};

	return (
		<>
			<Box
				sx={{
					flexGrow: 1,
					bgcolor: "#ebebeb",
				}}
				overflow-y="scroll"
			>
				<NavBar />
				<Box
					className="body_box"
					sx={{
						mt: 12,
						mx: 30,
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignContent: "center",
						}}
					>
						<Typography variant="h3" fontWeight={700}>
							Search Properties to Rent
						</Typography>
						<TextField
							label="Search with SearchBar"
							value={searchValue}
							onChange={(e) => {
								setSearchValue(e.target.value);
							}}
							sx={{
								bgcolor: "white",
							}}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<SearchIcon />
									</InputAdornment>
								),
							}}
						></TextField>
					</Box>
					<SearchFilter
						city={city}
						handleCity={handleCity}
						range={range}
						handleRange={handleRange}
						beds={beds}
						handleBeds={handleBeds}
						property={property}
						handleProperty={handleProperty}
						Reset={Reset}
					/>
					<Catalogue Data={filteredData} />
				</Box>
			</Box>
		</>
	);
}

export default Rent;
