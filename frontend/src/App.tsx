import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import useLocalStorage from "use-local-storage";
import { useAtom } from "jotai";
import { themeToggleAtom } from "./jotai-store/atoms/navbarAtom";
import Home from "./Components/Home/home";
import Footer from "./Components/footer/footer";

function App() {
  const [theme, setTheme] = useAtom(themeToggleAtom);
  const[mode,setMode]=useLocalStorage("mode",false)
  

  return (
    <div
      style={{transition: "all 0.5s ease-out", backgroundColor: !theme.isDark ? "#272829" : "#D8D9DA" }}
      className="App"
    >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
