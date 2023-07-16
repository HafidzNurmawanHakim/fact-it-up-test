import { FormOutlined, PlusOutlined, SendOutlined } from "@ant-design/icons";
import {
	Box,
	Collapse,
	Grid,
	IconButton,
	Divider,
	Paper,
	Typography,
	useTheme,
} from "@mui/material";
import { useState } from "react";
import CustomTextArea from "./CustomTextArea";
import Image from "next/image";
import { useAppController } from "../../app/layout/core/AppController";
import MemoImageIcon from "../../app/icons/ImageIcon";

function NewStatusItem() {
	const { isMobile, isIpad, leftPanel } = useAppController();
	const [checked, setChecked] = useState<boolean | undefined>(false);
	const theme = useTheme();

	const textAreaFocusHandle = (val: any) => {
		setChecked(true);
	};

	const children = (
		<Paper elevation={0}>
			<Box
				component="div"
				sx={{
					height: checked ? 400 : 100,
					pb: 1,
					position: "relative",
					transition: "0.3s",
					borderRadius: " 0 0 6px 0",
					background: (theme) => theme.palette.background.default,
				}}
			>
				<Box
					sx={{
						width: "100%",
						height: "15%",
						borderRadius: "0 4px 0 0",
						display: "flex",
						pl: 3,
						alignItems: "center",
						position: "relative",
						bottom: checked ? "" : "20px",
						transition: "0.3s",
					}}
				>
					<FormOutlined
						rev={null}
						style={{ color: "rgb(0, 138, 208)", fontSize: "20px", margin: "0 10px" }}
					/>
					<Typography color="#bbb" variant="body2" textAlign="center">
						Create Post
					</Typography>
				</Box>
				<Divider
					variant="middle"
					sx={{ visibility: checked ? "visible" : "hidden" }}
				></Divider>

				<Box>
					<CustomTextArea
						placeholder="Lagi Mikir Apa ??"
						checked={checked}
						maxRows={11}
						style={{ marginTop: checked ? "8px" : 0 }}
						onFocus={textAreaFocusHandle}
					/>
				</Box>

				<Box
					sx={{
						position: "absolute",
						bottom: checked ? "10px" : "20px",
						left: isMobile || isIpad ? "-10px" : "10px",
						width: "80%",
						height: "15%",
						// opacity: checked ? 1 : 0,
						transition: "0.3s",
					}}
				>
					<Grid container justifyContent={"start"}>
						<Grid item xs={3} component="div">
							<Box
								sx={{
									display: "flex",
									width: checked ? "90%" : "80%",
									alignItems: "center",
									background: (theme) => theme.palette.background.paper,
									pl: "5px",
									height: checked ? "40px" : "30px",
									borderRadius: "6px",
								}}
							>
								<Box
									sx={{
										mx: 1,
										fontSize: checked ? "20px" : "15px",
									}}
								>
									<MemoImageIcon />
								</Box>
								<Typography mt={"2px"} variant="body2">
									Galery
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={3} component="div">
							<Box
								sx={{
									display: "flex",
									width: checked ? "90%" : "80%",
									alignItems: "center",
									background: (theme) => theme.palette.background.paper,
									pl: "5px",
									height: checked ? "40px" : "30px",
									borderRadius: "6px",
								}}
							>
								<Box
									sx={{
										mx: 1,
										fontSize: checked ? "20px" : "15px",
									}}
								>
									<MemoImageIcon />
								</Box>
								<Typography mt={"2px"} variant="body2">
									Galery
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={3} component="div">
							<Box
								sx={{
									display: "flex",
									width: checked ? "90%" : "80%",
									alignItems: "center",
									background: (theme) => theme.palette.background.paper,
									pl: "5px",
									height: checked ? "40px" : "30px",
									borderRadius: "6px",
								}}
							>
								<Box
									sx={{
										mx: 1,
										fontSize: checked ? "20px" : "15px",
									}}
								>
									<MemoImageIcon />
								</Box>
								<Typography mt={"2px"} variant="body2">
									Galery
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Box>

				<IconButton
					sx={{
						position: "absolute",
						top: checked ? "325px" : "10px",
						right: isMobile || isIpad ? "-10px" : "20px",
						transition: "0.3s",
					}}
					onClick={() => setChecked(!checked)}
				>
					{checked ? <SendOutlined rev={null} /> : <PlusOutlined rev={null} />}
				</IconButton>
			</Box>
		</Paper>
	);

	return (
		<Collapse
			in={checked}
			collapsedSize={110}
			sx={{
				borderRight: (theme) => `5px solid ${theme.palette.background.paper}`,
				borderBottom: (theme) => `5px solid ${theme.palette.background.paper}`,
			}}
		>
			{children}
		</Collapse>
	);
}

export default NewStatusItem;
