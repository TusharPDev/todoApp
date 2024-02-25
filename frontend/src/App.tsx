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
  
  const handleToggleTheme = () => {
    setMode(!mode);
    setTheme({ ...theme, isDark: !mode });
  };
  return (
    <div
      onClick={handleToggleTheme}
      style={{ backgroundColor: theme.isDark ? "#272829" : "#D8D9DA" }}
      className="App"
    >
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
