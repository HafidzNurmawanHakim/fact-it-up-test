import { CaretRightOutlined } from "@ant-design/icons";
import { Box, IconButton, Paper, styled } from "@mui/material";
import { useAppController } from "../core/AppController";
import NewStatusItem from "../../../modules/component/NewStatusItem";

export default function MainPanel() {
  const {
    leftPanel,
    setLeftPanel,
    setMainGrid,
    heightBrowser,
    heightNav,
    isMobile,
    isIpad,
  } = useAppController();

  const hideLeftPanel = () => {
    setLeftPanel(!leftPanel);
    setMainGrid(9);
  };

  return (
    <div className="row mt-2">
      <Paper
        sx={{
          position: "relative",
          zIndex: 7,
          right: leftPanel ? "10px" : 0,
          overflow: "hidden",
          height: heightBrowser.valueOf() - (heightNav.valueOf() || 80) - 65,
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
            onClick={hideLeftPanel}
          >
            <CaretRightOutlined />
          </IconButton>
        </Box>
        <NewStatusItem />
      </Paper>
    </div>
  );
}
