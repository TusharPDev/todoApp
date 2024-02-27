import React from "react";
import "./home.css";
import Navbar from "../Navbar/navbar";
import { useAtom } from "jotai";
import useLocalStorage from "use-local-storage";
import { themeToggleAtom } from "../../jotai-store/atoms/navbarAtom";
import { userAuthAtom } from "../../jotai-store/atoms/authAtom";
import { Navigate } from "react-router-dom";
import WorkSpace from "../Auth/Routes/workspace";
const Home = () => {
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
        {isAuth.isAuthenticated && <WorkSpace />  }
      </div>
    </>
  );
};

export default Home;
