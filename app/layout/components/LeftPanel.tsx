import {
	CaretLeftOutlined,
	CustomerServiceOutlined,
	LayoutOutlined,
	PictureOutlined,
	PlaySquareOutlined,
	TeamOutlined,
} from "@ant-design/icons";
import {
	Badge,
	Box,
	Chip,
	Collapse,
	Divider,
	IconButton,
	LinearProgress,
	Paper,
	Stack,
	Theme,
	Typography,
	createStyles,
} from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import CustomChips from "../../../modules/component/CustomChips";
import { useAppController } from "../core/AppController";
import Link from "next/link";
import MemoGroupIcon from "../../icons/GroupIcon";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function LeftPanel() {
	const { data: session } = useSession();
	const {
		leftPanel,
		setLeftPanel,
		setMainGrid,
		heightBrowser,
		heightNav,
		heightLeftPanel,
	} = useAppController();

	const hideLeftPanel = () => {
		setLeftPanel(!leftPanel);
		setMainGrid(24);
	};

	const children = (
		<>
			<Paper
				sx={{
					pb: "5px",
					position: "relative",
					zIndex: 7,
					marginLeft: "6px",
					overflow: "hidden",
					transition: "all 0.3s ease-in-out",
					background: (theme) => theme.palette.background.default,
				}}
				id="panel"
				elevation={0}
				className="scroll-bar"
			>
				<Box
					sx={{
						position: "absolute",
						right: "5px",
						p: "2px",
						zIndex: 8,
						transition: "0.3s ease-in-out",
					}}
				>
					<IconButton
						sx={{
							height: "80px",
							borderRadius: "4px",
							m: "2px",
						}}
						size="small"
						onClick={hideLeftPanel}
					>
						<CaretLeftOutlined rev={null} />
					</IconButton>
				</Box>
				<Box
					component="div"
					sx={{
						width: { xs: "95vw", md: 310 },
						height: "86vh",
					}}
				>
					<div>
						<Grid2
							container
							columns={20}
							pt={2}
							mb={2}
							justifyContent="space-between"
							direction="row"
						>
							<Grid2 component="div" xs>
								<Grid2
									container
									direction="column"
									alignContent="center"
									justifyContent="center"
									height="100%"
								>
									<Grid2 component="div" xs={4}>
										<Image
											width={80}
											height={80}
											style={{ borderRadius: "4px" }}
											src="/media/avatar/avatar1.png"
											alt="logo"
										/>
									</Grid2>
									<Grid2 component="div" xs>
										<CustomChips sx={{ mt: 2 }} />
									</Grid2>
								</Grid2>
							</Grid2>
							<Grid2 component="div" xs={14} bgcolor="aqua" height="100%">
								<Paper
									elevation={0}
									sx={{
										background: (theme) => theme.palette.background.default,
									}}
								>
									<div className="d-flex flex-column">
										<Typography
											sx={{
												fontFamily: "poppins",
												ml: "4px",
											}}
											color="textSecondary"
											variant="body2"
										>
											{session?.user?.name}
										</Typography>
										<Box
											sx={{
												pt: "5px",
												mt: "5px",
											}}
										>
											<div className="crcl"></div>
											<Grid2 container justifyContent="center" maxWidth={"80%"} className="glass">
												<Divider orientation="vertical" flexItem></Divider>
												<Grid2 component="div" xs>
													<Grid2 container direction="column" alignItems="center">
														<Grid2 component="div" mt={1}>
															<Typography variant="h6" color="#ccc">
																69
															</Typography>
														</Grid2>
														<Grid2 component="div">
															<Typography variant="caption" color="#ccc">
																Pengikut
															</Typography>
														</Grid2>
													</Grid2>
												</Grid2>
												<Divider orientation="vertical" flexItem></Divider>

												<Grid2 component="div" xs>
													<Grid2 container direction="column" alignItems="center">
														<Grid2 component="div">
															<Typography variant="h6" color="#ccc" mt={1}>
																69
															</Typography>
														</Grid2>
														<Grid2 component="div">
															<Typography variant="caption" color="#ccc">
																Hits
															</Typography>
														</Grid2>
													</Grid2>
												</Grid2>
											</Grid2>
										</Box>
										<Box>
											<Box
												sx={{
													display: "flex",
													p: "5px 5px",
													mr: "5px",
													alignItems: "center",
												}}
											>
												<Box
													sx={{
														width: "100%",
														mr: 1,
													}}
												>
													<LinearProgress
														sx={{
															borderRadius: "4px",
														}}
														variant="determinate"
														value={70}
													/>
												</Box>
												<Box sx={{ minWidth: 35 }}>
													<Typography variant="body2" fontSize="10px" color="text.secondary">
														70%
													</Typography>
												</Box>
											</Box>
										</Box>
									</div>
								</Paper>
							</Grid2>
						</Grid2>

						<Divider></Divider>

						<Box mt={1}>
							{menuItem.map((item) => {
								return (
									<Link
										href="#"
										style={{
											textDecoration: "none",
											width: "100%",
											height: "40px",
											display: "flex",
											alignItems: "center",
										}}
									>
										<Grid2
											container
											sx={{
												p: "8px 2px",
												width: "80%",
												ml: "20px",

												":hover": {
													background: "#f5f5f5",
													borderRadius: "6px",
													transition: "0.3s",

													"& > *, .MuiTypography-root": {
														color: "rgb(0, 138, 208)",
														transition: "0.3s",
													},
												},
											}}
											alignItems="center"
										>
											<Grid2
												component="div"
												xs={1}
												mx={2}
												display="flex"
												alignItems="center"
												height="100%"
												fontSize="20px"
												color="#BFCCB5"
											>
												{item.icon}
											</Grid2>

											<Grid2 component="div" xs justifyContent="start" alignItems="center">
												<Typography variant="body2" color="#555">
													{item.title}
												</Typography>
											</Grid2>
										</Grid2>
									</Link>
								);
							})}
						</Box>
						{/* <Box className="pb-2">
                <Stack
                  direction="row"
                  spacing={1}
                  className="m-2 pb-2 overflow-auto scroll-bar"
                >
                  {dataFriend.map((friend, i) => {
                    return (
                      <Box
                        className="col d-flex justify-content-center align-items-center rounded-circle"
                        sx={{
                          minWidth: 82,
                          minHeight: 82,
                          maxWidth: 82,
                          maxHeight: 82,
                          border: (theme) =>
                            `3px solid ${theme.palette.primary.main} `,
                        }}
                        key={i}
                      >
                        <Image
                          src={friend.avatar}
                          alt="friend"
                          width={80}
                          height={80}
                          className="m-2"
                          style={{ borderRadius: "50%", cursor: "pointer" }}
                        />
                      </Box>
                    );
                  })}
                </Stack>
              </Box> */}
					</div>
					{/* <div className="">
              <Divider textAlign="left">
                <Chip label="Recent" variant="outlined" size="small" />
              </Divider>

              <Box
                sx={{
                  position: "relative",
                  overflowY: "scroll",
                  height: heightLeftPanel.valueOf() - 250,
                  my: "2px",
                }}
                className="scroll-bar"
              >
                <Box className="col" sx={{}}>
                  {dataFriend.map((friend, i) => {
                    return (
                      <Box key={i}>
                        <div className="col">
                          <div className="d-flex m-2 ">
                            <div className="col-2 pe-2 d-flex  flex-row justify-content-center align-items-center">
                              <Image
                                width={45}
                                height={45}
                                style={{ borderRadius: "4px" }}
                                src="/media/avatar/avatar1.png"
                                alt="logo"
                              />
                            </div>
                            <div className="col-10  ps-2 py-2 pe-3 d-flex justify-content-between align-items-center">
                              <div className="col d-flex flex-column">
                                <div className="col d-flex">
                                  <Typography
                                    sx={{ fontFamily: "poppins" }}
                                    color="textSecondary"
                                  >
                                    {session?.user?.name}
                                  </Typography>
                                  <CustomChips />
                                </div>
                                <Typography
                                  variant="caption"
                                  className="text-muted"
                                  sx={{ fontFamily: "Poppins" }}
                                >
                                  Aktif 2m lalu
                                </Typography>
                              </div>
                              <div className="">
                                <IconButton size="medium" color="inherit">
                                  <Badge color="error">
                                    <EllipsisOutlined />
                                  </Badge>
                                </IconButton>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Divider variant="inset" />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </div> */}
				</Box>
			</Paper>
		</>
	);

	return (
		<>
			<Box>
				<Collapse orientation="horizontal" in={leftPanel} collapsedSize={0}>
					{children}
				</Collapse>
			</Box>
		</>
	);
}

const menuItem = [
	{
		title: "Feed",
		icon: <LayoutOutlined rev={null} />,
	},
	{
		title: "Friends",
		icon: <TeamOutlined rev={null} />,
	},
	{
		title: "Galeri",
		icon: <PictureOutlined rev={null} />,
	},
	{
		title: "Music",
		icon: <CustomerServiceOutlined rev={null} />,
	},
	{
		title: "Reels",
		icon: <PlaySquareOutlined rev={null} />,
	},
];

const dataFriend = [
	{
		id: "1",
		name: "John",
		avatar: "/media/avatar/avatar1.png",
	},
	{
		id: "2",
		name: "Ujang",
		avatar: "/media/avatar/avatar2.png",
	},
	{
		id: "3",
		name: "Ucup",
		avatar: "/media/avatar/avatar3.png",
	},
	{
		id: "4",
		name: "Siti",
		avatar: "/media/avatar/avatar4.png",
	},
	{
		id: "5",
		name: "Anjir",
		avatar: "/media/avatar/avatar5.png",
	},
	{
		id: "6",
		name: "Acing",
		avatar: "/media/avatar/avatar6.png",
	},
	{
		id: "7",
		name: "Ocit",
		avatar: "/media/avatar/avatar7.png",
	},
	{
		id: "8",
		name: "Bgsd",
		avatar: "/media/avatar/avatar8.png",
	},
	{
		id: "9",
		name: "Kiritod",
		avatar: "/media/avatar/avatar9.png",
	},
	{
		id: "10",
		name: "Agus Septiani",
		avatar: "/media/avatar/avatar10.png",
	},
];
