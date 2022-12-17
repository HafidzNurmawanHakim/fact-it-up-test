import React from "react";
import { Box, Container, Grid, Paper, TextField } from "@mui/material";
import loginBg from "../../../public/media/ilustration/login.png";

const style = {
  bg: {
    backgroundImage: `url(/media/ilustration/login.png)`,
    backgroundSize: "cover",
    height: "100vh",
  },
};

const LoginComponent = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Paper style={style.bg} square>
        <Grid container>
          <Grid item xs={0} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <Box component="div" pt={10} pl={10}>
              <Grid>
                <h3>Login</h3>
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoginComponent;
