import { PlusOutlined, SendOutlined } from "@ant-design/icons";
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import CustomTextArea from "./CustomTextArea";
import Image from "next/image";
import { useAppController } from "../../app/layout/core/AppController";

function NewStatusItem() {
  const { isMobile, isIpad } = useAppController();
  const [checked, setChecked] = useState<boolean | undefined>(false);

  const textAreaFocusHandle = (val: any) => {
    setChecked(true);
  };

  const children = (
    <Paper sx={{ m: 1, width: { xs: 400, md: "640px" } }} elevation={0}>
      <Box
        component="div"
        sx={{
          width: { xs: 380, md: "640px" },
          height: 400,
          position: "relative",
        }}
      >
        <Grid container direction="row">
          <Grid item xs={isMobile || isIpad ? 2 : 1}>
            <Image
              width={40}
              height={40}
              style={{ borderRadius: "4px" }}
              src="/media/avatar/avatar1.png"
              alt="logo"
              className="mt-1 ms-2"
            />
          </Grid>

          <Grid item xs={isMobile || isIpad ? 10 : 11}>
            <CustomTextArea
              placeholder="Lagi Mikir Apa Sayang??"
              checked={checked}
              maxRows={15}
              style={{ marginTop: "8px" }}
              onFocus={textAreaFocusHandle}
            />
          </Grid>
        </Grid>

        <IconButton
          sx={{
            position: "absolute",
            top: checked ? "350px" : "5px",
            right: isMobile || isIpad ? "-10px" : "10px",
            transition: "0.3s",
          }}
          onClick={() => setChecked(!checked)}
        >
          {checked ? <SendOutlined /> : <PlusOutlined />}
        </IconButton>
      </Box>
    </Paper>
  );

  return (
    <Collapse in={checked} collapsedSize={60}>
      {children}
    </Collapse>
  );
}

export default NewStatusItem;
