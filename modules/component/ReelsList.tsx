import { Box, List, ListItem, ListSubheader } from "@mui/material";
import Image from "next/image";

export default function ReelsList() {
	return (
		<Box
			sx={{
				position: { xs: "none", md: "none", xl: "fixed" },
				right: "10px",
				top: "90px",
				width: { xs: "100%", md: "100%", xl: "31%" },
				height: "15%",
			}}
		>
			<Box
				id="reelSection"
				sx={{
					width: "100%",
					overflow: "auto",
					height: "100%",
				}}
				className="scroll-bar"
			>
				<List
					sx={{
						width: "100%",
						background: (theme) => theme.palette.background.default,
						position: "relative",
						overflow: "auto",
						height: "100%",
						display: "flex",
						alignItems: "center",
						"& ul": { padding: 0 },
					}}
					subheader={<li />}
					className="scroll-bar"
				>
					{[0, 1, 2, 3, 4].map((sectionId) => (
						<li
							key={`section-${sectionId}`}
							style={{
								marginTop: "10px",
							}}
						>
							<ul
								style={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<ListSubheader
									sx={{
										position: "sticky",
										left: 0,
										zIndex: 1,
										height: "80px",
										paddingLeft: "16px",
										width: "80px",
										borderRadius: "50%",
										display: "flex",
										alignItems: " center",
										justifyContent: "center",
										marginLeft: "10px",
									}}
								>
									<Image
										width={80}
										height={80}
										style={{ borderRadius: "50%" }}
										src="https://random.imagecdn.app/80/80"
										alt="logo"
									/>
								</ListSubheader>
								{[0, 1, 2].map((item) => (
									<ListItem
										sx={{
											height: "80px",
											width: "80px",
											borderRadius: "50%",
											display: "flex",
											alignItems: " center",
											justifyContent: "center",
											marginLeft: "10px",
										}}
										key={`item-${sectionId}-${item}`}
									>
										<Image
											width={80}
											height={80}
											style={{ borderRadius: "50%" }}
											src="https://random.imagecdn.app/80/80"
											alt="logo"
										/>
									</ListItem>
								))}
							</ul>
						</li>
					))}
				</List>
			</Box>
		</Box>
	);
}
