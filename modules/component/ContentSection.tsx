import {
	CommentOutlined,
	EllipsisOutlined,
	HeartOutlined,
	MessageOutlined,
	PaperClipOutlined,
	ShareAltOutlined,
} from "@ant-design/icons";
import {
	Box,
	Button,
	Divider,
	Grid,
	IconButton,
	InputAdornment,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import MemoSpeechBubble from "../../app/icons/SpeechBubble";
import MemoBookmark from "../../app/icons/Bookmark";

function ContentSection() {
	return (
		<Paper
			sx={{
				background: (theme) => theme.palette.background.default,
			}}
			elevation={0}
		>
			<Box
				sx={{
					marginTop: "5px",
					marginLeft: "5px",
					border: (theme) => `2px solid ${theme.palette.background.paper}`,
					borderRadius: "6px",
					mt: 1,
					mb: 2,
				}}
			>
				<Box>
					<Grid2 component="div" xs>
						<Grid2 container alignContent="center" justifyContent="center" height="100%">
							<Grid2 component="div" xs={1} pl={1} pt={1}>
								<Image
									width={45}
									height={45}
									style={{ borderRadius: "4px" }}
									src="/media/avatar/avatar1.png"
									alt="logo"
								/>
							</Grid2>
							<Grid2 component="div" position="relative" pt="10px" pl={1} xs>
								<Typography
									variant="body2"
									width="fit-content"
									mt={2}
									lineHeight={0}
									gutterBottom
								>
									Hafidz
								</Typography>
								<Typography variant="caption" color="#bbb">
									1 day ago
								</Typography>
								<Box position="absolute" top={"8px"} right={"10px"}>
									<IconButton aria-label="fingerprint" color="success">
										<EllipsisOutlined rev={null} />
									</IconButton>
								</Box>
							</Grid2>
						</Grid2>
					</Grid2>

					<Typography gutterBottom width="90%" ml={1} mt={1} variant="body2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum minus omnis
						eius enim voluptatem officiis velit tempore magni excepturi?
					</Typography>

					<Box ml="8px">
						<Image
							width={690}
							height={300}
							src="/media/ilustration/meandyou.jpg"
							alt="meandyou"
							style={{
								borderRadius: "4px",
							}}
						/>
					</Box>

					<Box width={"100%"} p={1} position="relative">
						<Grid2 container spacing={1} component={"div"}>
							<Grid2 component={"div"}>
								<Button
									startIcon={<HeartOutlined rev={null} style={{ color: " red" }} />}
									aria-label="fingerprint"
								>
									<Typography
										component="p"
										fontFamily="Poppins"
										color={"#bbb"}
										fontSize="12px"
										ml={1}
									>
										99k
									</Typography>
								</Button>
							</Grid2>

							<Grid2 component={"div"}>
								<Button startIcon={<MessageOutlined rev={null} />} aria-label="fingerprint">
									<Typography
										component="p"
										fontFamily="Poppins"
										color={"#bbb"}
										fontSize="12px"
										ml={1}
									>
										99k
									</Typography>
								</Button>
							</Grid2>

							<Grid2 component={"div"}>
								<Button startIcon={<ShareAltOutlined rev={null} />} aria-label="fingerprint">
									<Typography
										component="p"
										fontFamily="Poppins"
										color={"#bbb"}
										fontSize="12px"
										ml={1}
									>
										99k
									</Typography>
								</Button>
							</Grid2>

							<Box position="absolute" right={10}>
								<IconButton>
									<MemoBookmark fontSize={20} fill="red" />
								</IconButton>
							</Box>
						</Grid2>
					</Box>

					<Divider variant="middle"></Divider>

					<Box id="commentSection" width={"100%"} p={1}>
						<Grid2
							container
							columns={16}
							alignContent="center"
							justifyContent="center"
							height="100%"
						>
							<Grid2 component="div" xs={1} pl={1} pt={1}>
								<Image
									width={36}
									height={36}
									style={{ borderRadius: "4px" }}
									src="/media/avatar/avatar1.png"
									alt="logo"
								/>
							</Grid2>
							<Grid2 component="div" position="relative" pt="10px" pl={1} xs>
								<TextField
									fullWidth
									maxRows={1}
									variant="standard"
									placeholder="Write your comment..."
									sx={{
										border: "1px solid transparent",
										background: (theme) => theme.palette.background.paper,
										borderRadius: " 20px",
										pl: " 10px",
										pt: "2px",
									}}
									InputProps={{
										disableUnderline: true,
										endAdornment: (
											<InputAdornment position="start">
												<PaperClipOutlined
													style={{ fontSize: "20px", marginTop: "2px", marginRight: " 10px" }}
													rev={null}
												/>
											</InputAdornment>
										),
									}}
								/>
							</Grid2>
						</Grid2>
					</Box>
				</Box>
			</Box>
		</Paper>
	);
}

export default ContentSection;
