import { CaretLeftOutlined, EllipsisOutlined } from "@ant-design/icons";
import {
  Badge,
  Box,
  Chip,
  Collapse,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import CustomChips from "../../../modules/component/CustomChips";
import { useAppController } from "../core/AppController";

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
    setMainGrid(12);
  };

  const children = (
    <div className="row mt-2 pe-0 me-0 ">
      <Paper
        sx={{
          pb: "5px",
          position: "relative",
          width: { sm: 320 },
          zIndex: 7,
          overflow: "hidden",
          transition: "all 0.3s ease-in-out",
          background: (theme) => theme.palette.background.default,
        }}
        id="panel"
        elevation={0}
        className="scroll-bar"
      >
        <Box
          component="div"
          sx={{
            width: { xs: 340, sm: 320 },
            maxHeight:
              heightBrowser.valueOf() - (heightNav.valueOf() || 80) - 65,
          }}
        >
          <div className="col d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex m-2 py-2 col-sm-12">
                <div className="col-3 d-flex  flex-row justify-content-center align-items-center">
                  <Image
                    width={80}
                    height={80}
                    style={{ borderRadius: "4px" }}
                    src="/media/avatar/avatar1.png"
                    alt="logo"
                  />
                </div>
                <Paper elevation={0} className="col-8 ms-2 ps-2 py-2 ">
                  <div className="d-flex">
                    <Typography
                      sx={{ fontFamily: "poppins", ms: 1 }}
                      color="textSecondary"
                    >
                      {session?.user?.name}
                    </Typography>
                    <CustomChips />
                  </div>
                </Paper>
              </div>

              <span className="separator"></span>

              <Box className="pb-2">
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
              </Box>
            </div>
            <div className="">
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
            </div>
          </div>
        </Box>
      </Paper>
    </div>
  );

  return (
    <>
      <Box position={"relative"}>
        <Box
          sx={{
            position: "absolute",
            right: "44px",
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
            }}
            size="small"
            onClick={hideLeftPanel}
          >
            <CaretLeftOutlined />
          </IconButton>
        </Box>
        <Collapse orientation="horizontal" in={leftPanel} collapsedSize={0}>
          {children}
        </Collapse>
      </Box>
    </>
  );
}

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
