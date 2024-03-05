import { Box, Grid, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { themeToggleAtom } from "../../../jotai-store/atoms/navbarAtom";
import { useAtom } from "jotai";
import axios from "axios";
import "./signup.css";
import AppIcon from "../../../assets/images/robot.png";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormInputText from "../../Shared/form-components/FormTextInput/FormText";
import { makeStyles } from "@mui/styles";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
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

const defaultTheme = createTheme();

const useStyles = makeStyles((theme) => ({
  cssLabel: {
    color: "#fff!important",
    fontWeight: "400!important",
    fontSize: "12px",
    marginTop: "-5px",
  },
  cssLabelLight: {
    color: "#3D3B40!important",
    fontWeight: "400!important",
    fontSize: "12px",
    marginTop: "-5px",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#7469B6!important",
  },
}));
const SignUp = () => {
  const classes = useStyles();

  const [theme, setTheme] = useAtom(themeToggleAtom);
  const [isVisible,setIsvisible] = React.useState(false)
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const userName = data.get("userName");
    const email = data.get("email");
    const passWord = data.get("password");
    console.log({
      userName,
      email,
      passWord,
    });
    try {
      if (userName == "" || email == "" || passWord == "") {
        Swal.fire({
          icon: "info",
          title: "Empty Fields",
          text: "cannot proceed",
          width:400,
          heightAuto:false,
          background: theme.isDark ? "#D8D9DA" : "#272829"
        });
      }else{
        const response = await axios.post(
          "http://localhost:8001/api/v1/register",
          {
            email: email,
            username: userName,
            password: passWord,
          }
        );
        console.log(response);
        console.log("User signed up:", response.data.user);
        if (response.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Rgistered",
            text: "You have been registered successfully",
            background: theme.isDark ? "#D8D9DA" : "#272829",
          }).then((resIfSucsess)=>{
            if(resIfSucsess.isConfirmed){
              navigate("/signin")
            }else{
              console.log("error")
            }
          })
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "cannot proceed",
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handlePassVisibility = () =>{
    setIsvisible(!isVisible)
  }
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
                    marginTop: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ mt: 0.5, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography
                    sx={{
                      color: theme.isDark ? "#3D3B40" : "#C7C8CC",
                      fontFamily: "monospace",
                    }}
                    component="h1"
                    variant="h5"
                  >
                    Sign up
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                  >
                    <Grid
                      className="form-group"
                      container
                      spacing={2}
                      sx={{ px: 2 }}
                    >
                      <Grid item xs={12}>
                        <FormInputText
                          className="userName"
                          autoComplete="given-name"
                          name="userName"
                          required
                          InputLabelProps={{
                            classes: {
                              root: !theme.isDark
                                ? classes.cssLabel
                                : classes.cssLabelLight,
                              focused: !theme.isDark
                                ? classes.cssLabel
                                : classes.cssLabelLight,
                            },
                          }}
                          InputProps={{
                            classes: {
                              root: classes.notchedOutline,
                              focused: classes.notchedOutline,
                              notchedOutline: classes.notchedOutline,
                            },
                          }}
                          fullWidth
                          id="userName"
                          label="Username"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormInputText
                          required
                          InputLabelProps={{
                            classes: {
                              root: !theme.isDark
                                ? classes.cssLabel
                                : classes.cssLabelLight,
                              focused: !theme.isDark
                                ? classes.cssLabel
                                : classes.cssLabelLight,
                            },
                          }}
                          InputProps={{
                            classes: {
                              root: classes.notchedOutline,
                              focused: classes.notchedOutline,
                              notchedOutline: classes.notchedOutline,
                            },
                          }}
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12} sx={{position:"relative"}}>
                        <FormInputText
                          required
                          InputLabelProps={{
                            classes: {
                              root: !theme.isDark
                                ? classes.cssLabel
                                : classes.cssLabelLight,
                              focused: !theme.isDark
                                ? classes.cssLabel
                                : classes.cssLabelLight,
                            },
                          }}
                          InputProps={{
                            classes: {
                              root: classes.notchedOutline,
                              focused: classes.notchedOutline,
                              notchedOutline: classes.notchedOutline,
                            },
                          }}
                          fullWidth
                          name="password"
                          label="Password"
                          type= {isVisible ? "text" : "password"}
                          id="password"
                          autoComplete="new-password"
                        />
                        <Box sx={{position:"absolute",top:26,right:10}}>
                          {
                            isVisible ? <RemoveRedEyeIcon sx={{fontSize:"19px",color:"#65B741",cursor:"pointer"}} onClick={handlePassVisibility}/> : <VisibilityOffIcon sx={{fontSize:"19px",color:"#EE4266",cursor:"pointer"}} onClick={handlePassVisibility}/>
                          }
                        
                        </Box>
                      
                      </Grid>
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                          mt: 3,
                          mb: 2,
                          width: 150,
                          backgroundColor: "#7469B6",
                          "&:hover": {
                            backgroundColor: "#7469B680!important",
                          },
                        }}
                      >
                        Sign Up
                      </Button>
                    </Grid>

                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link
                          sx={{
                            color: theme.isDark ? "#3D3B40" : "#C7C8CC",
                            textDecoration: "none",
                            mr: 1,
                          }}
                          href="/signin"
                          variant="body2"
                        >
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
