import React from "react";
import { Box, Grid, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { themeToggleAtom } from "../../../jotai-store/atoms/navbarAtom";
import { useAtom } from "jotai";
import './signup.css'
import AppIcon from "../../../assets/images/robot.png";

const SignUp = () => {
  const [theme, setTheme] = useAtom(themeToggleAtom);

  return (
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
              <Grid className="flicker-in-1" sx={{width:"100%",display:"flex",justifyContent:"center",mt:2}}>
                <img
                  style={{ width: "90px", height: "90px" }}
                  src={AppIcon}
                  alt=""
                />
              </Grid>
              <Grid>
                <Box></Box>
              </Grid>
              <Grid>
                <Box></Box>
              </Grid>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
