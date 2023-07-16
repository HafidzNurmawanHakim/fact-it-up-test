import { CaretRightOutlined } from "@ant-design/icons";
import {
	Box,
	IconButton,
	List,
	ListItem,
	ListItemText,
	ListSubheader,
	Paper,
	styled,
} from "@mui/material";
import { useAppController } from "../core/AppController";
import NewStatusItem from "../../../modules/component/NewStatusItem";
import ContentSection from "../../../modules/component/ContentSection";
import Image from "next/image";
import ReelsList from "../../../modules/component/ReelsList";

export default function MainPanel() {
	const { leftPanel, setLeftPanel, setMainGrid, isMobile, isIpad } =
		useAppController();

	const showLeftPanel = () => {
		setLeftPanel(!leftPanel);
		setMainGrid(19);
	};

	return (
		<>
			<Paper
				sx={{
					position: "relative",
					zIndex: 7,
					overflowY: "scroll",
					height: "100%",
					marginLeft: "8px",
					background: (theme) => theme.palette.background.default,
					display: (isMobile || isIpad) && leftPanel ? "none" : "block",
					transition: "0.3s ease-in-out",
				}}
				id="panel"
				elevation={0}
				className="scroll-bar"
			>
				<Box
					sx={{
						position: "absolute",
						left: 0,
						display: leftPanel ? "none" : "block",
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
							mt: "21px",
							opacity: leftPanel ? 0 : 1,
						}}
						size="small"
						onClick={showLeftPanel}
					>
						<CaretRightOutlined rev={null} />
					</IconButton>
				</Box>
				<Box sx={{ width: { xs: "100%", md: " 100%", xl: "60%" } }}>
					<Box sx={{ display: { md: "block", xs: "block", xl: "none" } }}>
						<ReelsList />
					</Box>
					<NewStatusItem />
					<ContentSection />
				</Box>

				<Box sx={{ display: { md: "none", xs: "none", xl: "block" } }}>
					<ReelsList />
				</Box>
			</Paper>
		</>
	);
}
