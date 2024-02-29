import { Box, Grid, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { themeToggleAtom } from "../../../jotai-store/atoms/navbarAtom";
import { useAtom } from "jotai";
import "./signup.css";
import AppIcon from "../../../assets/images/robot.png";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const SignUp = () => {
  const [theme, setTheme] = useAtom(themeToggleAtom);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Container component="main" sx={{width:850}}> */}
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="center">
            <Grid item xs={11} sm={6} md={4} lg={3}>
              <Paper
                sx={{
                  backgroundColor: theme.isDark ? "#27282940" : "#B4B4B860",
                  height: "520px",
                }}
                variant="elevation"
              >
                <Stack>
                  <Grid
                    className="flicker-in-1"
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      mt: 2,
                    }}
                  >
                    <img
                      style={{ width: "90px", height: "90px" }}
                      src={AppIcon}
                      alt=""
                    />
                  </Grid>
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign up
                    </Typography>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 3 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="allowExtraEmails"
                                color="primary"
                              />
                            }
                            label="I want to receive inspiration, marketing promotions and updates via email."
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign Up
                      </Button>
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Link href="#" variant="body2">
                            Already have an account? Sign in
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      {/* </Container> */}
    </ThemeProvider>
  );
};

export default SignUp;
