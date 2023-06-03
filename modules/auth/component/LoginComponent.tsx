import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useThemeController } from "../../../app/layout/core/ThemeProvider";
import { useFormik } from "formik";
import { AuthInit, AuthSchema } from "../core/_model";
import { getSession, signIn } from "next-auth/react";

const style = {
  bg: {
    backgroundImage: `url(/media/ilustration/login.png)`,
    backgroundSize: "cover",
    height: "100vh",
  },
};

const LoginComponent = () => {
  const formik = useFormik({
    initialValues: AuthInit,
    validationSchema: AuthSchema,
    onSubmit: async (values, actions) => {
      return await signIn("credentials", {
        redirect: true,
        username: values.username,
        password: values.password,
        callbackUrl: "/",
      });
    },
  });

  return (
    <Container maxWidth={false} disableGutters>
      <Paper style={style.bg} square>
        <Grid container>
          <Grid item xs={0} md={6}></Grid>
          <Grid item xs={24} md={6}>
            <Box component="form" pt={15} pl={10}>
              <div className="col-7">
                <Paper className="shadow pe-5 p-4">
                  <h3 className="mb-4">Login</h3>
                  <FormControl
                    fullWidth
                    sx={{ m: 1 }}
                    variant="standard"
                    className="mb-3"
                  >
                    <TextField
                      {...formik.getFieldProps("username")}
                      variant="outlined"
                      label="Username"
                      type="text"
                      error={
                        formik.touched.username && formik.errors.username
                          ? true
                          : false
                      }
                    />
                    {formik.touched.username && formik.errors.username ? (
                      <Typography variant="body2" color="red">
                        {formik.errors.username}
                      </Typography>
                    ) : null}
                  </FormControl>
                  <FormControl
                    fullWidth
                    sx={{ m: 1 }}
                    variant="standard"
                    className="mb-3"
                  >
                    <TextField
                      {...formik.getFieldProps("password")}
                      variant="outlined"
                      label="Password"
                      type="password"
                      error={
                        formik.touched.password && formik.errors.password
                          ? true
                          : false
                      }
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <Typography variant="body2" color="red">
                        {formik.errors.password}
                      </Typography>
                    ) : null}
                  </FormControl>
                  <Typography variant="body2" className="ms-2 ">
                    <Link href="#" className="text-decoration-none">
                      Lupa password?
                    </Link>
                  </Typography>

                  <div className="row ps-3 my-5">
                    <Button variant="outlined" onClick={formik.submitForm}>
                      Login
                    </Button>
                  </div>
                </Paper>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoginComponent;
