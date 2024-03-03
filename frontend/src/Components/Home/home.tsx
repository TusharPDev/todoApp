import React from "react";
import "./home.css";
import { Grid, Paper } from "@mui/material";
import Navbar from "../Navbar/navbar";
import { useAtom } from "jotai";
import useLocalStorage from "use-local-storage";
import { themeToggleAtom } from "../../jotai-store/atoms/navbarAtom";
import { userAuthAtom } from "../../jotai-store/atoms/authAtom";
import { Navigate, useLocation } from "react-router-dom";
import WorkSpace from "../Auth/Routes/workspace";
import PublicRoutes from "../Auth/Routes/publicroutes";
const Home = () => {
  const location = useLocation();
  const [theme, setTheme] = useAtom(themeToggleAtom);
  const [mode, setMode] = useLocalStorage("mode", false);
  const [isAuth, setIsAuth] = useAtom(userAuthAtom);
  return (
    <>
      <div
        style={{
          transition: "all 0.5s ease-out",
          backgroundColor: mode ? "#272829" : "#D8D9DA",
        }}
        className="App"
      >
        <Navbar />
        {location.pathname === "/" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "122px",
            }}
          >
            <div>
              <h1 style={{textAlign:"center",marginBottom:"40px"}}>Welcome to MR.TASKYIE</h1>
              <p>Here are some amazing facts and features about our app:</p>
              <ul>
                <li>
                  Feature 1: Organize your tasks in a simple and intuitive
                  interface.
                </li>
                <li>Feature 2: Collaborate with your team in real-time.</li>
                <li>
                  Feature 3: Set reminders and due dates to stay on track.
                </li>
                <li>
                  Feature 4: Customize your workspace to fit your workflow.
                </li>
                <li>
                  Feature 5: Access your tasks from anywhere with our mobile
                  app.
                </li>
              </ul>
              <p style={{marginTop:"250px",textAlign:"center"}}>Sign up now to experience the power of MR.TASKYIE!</p>
            </div>
          </div>
        ) : (
          <>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                mt: "80px",
              }}
            >
              {isAuth.isAuthenticated ? <WorkSpace /> : <PublicRoutes />}
            </Grid>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
