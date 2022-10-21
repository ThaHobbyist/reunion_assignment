import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

function Catalogue({ Data }) {
	return (
		<>
			<Grid
				container
				spacing={6}
				sx={{
					mt: 4,
				}}
			>
				{Data.map((data, index) => {
					return (
						<Grid item sm={6} md={4} key={index}>
							<Card>
								<CardMedia component="img" image={data.img} />
								<CardContent>
									<Typography
										sx={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<Typography
											variant="h6"
											fontWeight={700}
										>
											${data.Price}
										</Typography>
										/month
									</Typography>
									<Typography variant="h6">
										{data.Name}
									</Typography>
									<Typography>
										{data.Address}, {data.City}
									</Typography>
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-evenly",
											mt: 3,
										}}
									>
										<Box
											sx={{
												display: "flex",
											}}
										>
											<BedIcon
												sx={{
													mr: 1,
												}}
											/>
											<Typography>
												{data.Beds} Beds
											</Typography>
										</Box>
										<Box
											sx={{
												display: "flex",
											}}
										>
											<BathtubIcon
												sx={{
													mr: 1,
												}}
											/>
											<Typography>
												{data.Bathroom} Bathrooms
											</Typography>
										</Box>
										<Box
											sx={{
												display: "flex",
											}}
										>
											<CompareArrowsIcon
												sx={{
													mr: 1,
												}}
											/>
											<Typography>
												{data.Area} m&sup3;
											</Typography>
										</Box>
									</Box>
								</CardContent>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
}

export default Catalogue;
