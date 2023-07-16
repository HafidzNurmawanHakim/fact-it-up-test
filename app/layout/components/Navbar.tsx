import { MailTwoTone } from "@ant-design/icons";
import {
	MenuOutlined,
	MessageOutlined,
	SearchOutlined,
	UserOutlined,
} from "@ant-design/icons/lib/icons";
import {
	Badge,
	Box,
	Button,
	FilledInput,
	FormControl,
	FormHelperText,
	IconButton,
	Input,
	InputAdornment,
	OutlinedInput,
	Paper,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { useAppController } from "../core/AppController";
import { useRouter } from "next/router";

export default function Navbar() {
	const { data: session } = useSession();
	const router = useRouter();
	const { setRightPanel, rightPanel } = useAppController();

	return (
		<Paper
			elevation={0}
			sx={{ background: (theme) => theme.palette.background.default }}
			square
			id="navbar"
		>
			<div className="navbar navbar-inverse navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<a href="/" className="navbar-brand ms-5">
							<img src="/favicon.ico" alt="Anjay App" width={20} />
						</a>
					</div>
					<Toolbar
						sx={{
							width: "39vw",
							display: "flex",
							justifyContent: " space-between",
						}}
					>
						<Box
							sx={{
								mx: 2,
								width: "50%",
							}}
						>
							<TextField
								fullWidth
								maxRows={1}
								variant="standard"
								sx={{
									border: "1px solid transparent",
									background: (theme) => theme.palette.background.paper,
									borderRadius: " 20px",
									height: "40px",
									pl: " 10px",
									pt: "2px",
								}}
								InputProps={{
									disableUnderline: true,
									endAdornment: (
										<InputAdornment position="start">
											<SearchOutlined
												style={{ fontSize: "20px", marginTop: "2px", marginRight: " 10px" }}
												rev={null}
											/>
										</InputAdornment>
									),
								}}
							/>
						</Box>
						<Box>
							{session ? (
								<>
									<Box sx={{ display: { xs: "none", md: "flex" } }}>
										<div className="col me-2">
											<IconButton size="medium" color="inherit">
												<Badge badgeContent={4} color="error">
													<MessageOutlined rev={null} />
												</Badge>
											</IconButton>
										</div>
										<div className="col me-2">
											<IconButton size="medium" color="inherit">
												<Badge>
													<UserOutlined rev={null} />
												</Badge>
											</IconButton>
										</div>
									</Box>
									<Box sx={{ display: { xs: "block", md: "none" } }}>
										<IconButton
											size="medium"
											color="inherit"
											onClick={() => setRightPanel((prev) => !prev)}
										>
											<Badge>
												<MenuOutlined rev={null} />
											</Badge>
										</IconButton>
									</Box>
								</>
							) : (
								<>
									<Button variant="contained" onClick={() => router.push("/api/auth/signin")}>
										Login
									</Button>
								</>
							)}
						</Box>
					</Toolbar>
				</div>
			</div>
		</Paper>
	);
}
