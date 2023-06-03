import {
  Box,
  Button,
  Chip,
  Collapse,
  IconButton,
  Paper,
  Slide,
  Theme,
  Typography,
} from "@mui/material";
import { useAppController } from "../core/AppController";
import { useRef } from "react";
import {
  MenuOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons/lib/icons";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

interface RightPanelProps {
  rightPanelContainerRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function RightPanel(props: RightPanelProps) {
  const { rightPanelContainerRef } = props;
  const { data: session } = useSession();
  const { rightPanel } = useAppController();

  const children = (
    <div className="col position-relative end-0">
      <Paper
        sx={{
          m: 1,
          zIndex: 7,
          background: (theme) => theme.palette.background.default,
          display: { xs: "block", md: "none" },
        }}
        className="shadow"
        id="panel"
        elevation={0}
      >
        <Box
          component="div"
          className="d-flex flex-column"
          sx={{ width: { xs: 320 }, height: 400 }}
        >
          <div className="col p-2">
            <div className="d-flex m-2 py-2">
              <div className="col-2 d-flex flex-row justify-content-center align-items-center">
                <Image
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                  src="/media/avatar/avatar1.png"
                  alt="logo"
                />
              </div>
              <Paper elevation={0} className="col-10 ps-2 py-2 ">
                <Typography
                  sx={{ fontFamily: "poppins", ms: 1 }}
                  color="textSecondary"
                >
                  {session?.user?.name}
                </Typography>
                <Chip
                  label="Master Admin"
                  color="primary"
                  size="small"
                  variant="outlined"
                />
              </Paper>
            </div>
          </div>
          <Button
            sx={{
              width: "95%",
              m: "auto",
              bottom: 0,
              mb: 1,
            }}
            endIcon={<LogoutOutlined />}
            className="d-flex"
            variant="outlined"
            onClick={() => signOut()}
          >
            Log Out
          </Button>
        </Box>
      </Paper>
    </div>
  );

  return (
    <div>
      <Slide
        direction="left"
        in={rightPanel}
        container={rightPanelContainerRef.current}
      >
        {children}
      </Slide>
    </div>
  );
}
