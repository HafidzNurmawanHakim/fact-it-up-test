import { MailTwoTone } from "@ant-design/icons";
import {
  MenuOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Paper,
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
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              {session ? (
                <>
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <div className="col me-2">
                      <IconButton size="medium" color="inherit">
                        <Badge badgeContent={4} color="error">
                          <MessageOutlined />
                        </Badge>
                      </IconButton>
                    </div>
                    <div className="col me-2">
                      <IconButton size="medium" color="inherit">
                        <Badge>
                          <UserOutlined />
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
                        <MenuOutlined />
                      </Badge>
                    </IconButton>
                  </Box>
                </>
              ) : (
                <>
                  <Button
                    variant="contained"
                    onClick={() => router.push("/api/auth/signin")}
                  >
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
