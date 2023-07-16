import { useEffect, useRef } from "react";
import { useAppController } from "../core/AppController";
import Navbar from "./Navbar";
import RightPanel from "./RightPanel";
import { Backdrop, Grid, Paper } from "@mui/material";
import LeftPanel from "./LeftPanel";
import MainPanel from "./MainPanel";

const MasterLayout = () => {
	const { rightPanel, setRightPanel, mainGrid, leftGrid } = useAppController();
	const rightPanelContainerRef = useRef<HTMLDivElement>(undefined!);

	useEffect(() => {
		if (!rightPanelContainerRef.current) return;
	}, [rightPanelContainerRef]);

	const closeBackdrop = () => {
		setRightPanel(false);
	};

	return (
		<div id="main" style={{ height: "100vh" }}>
			<Paper elevation={0} sx={{ height: "100vh" }}>
				<Navbar />
				<Grid
					container
					justifyContent="center"
					spacing={0}
					mt={1}
					columns={24}
					sx={{ overflowX: "hidden" }}
				>
					<Grid item xs>
						<LeftPanel />
					</Grid>
					<Grid
						item
						xs={mainGrid}
						sx={{
							transition: "all 0.3s ease-in-out",
							maxHeight: " 87vh",
						}}
					>
						<MainPanel />
					</Grid>
				</Grid>
				<div
					className="col me-4 pb-5 position-absolute end-0 "
					ref={rightPanelContainerRef}
					style={{
						top: "80px",
						overflow: "hidden",
						zIndex: 7,
					}}
				>
					<div className="d-flex justify-content-end">
						<RightPanel rightPanelContainerRef={rightPanelContainerRef} />
					</div>
				</div>
				<Backdrop
					open={rightPanel}
					onClick={closeBackdrop}
					sx={{ zIndex: 6, background: "transparent" }}
				/>
			</Paper>
		</div>
	);
};

export default MasterLayout;
