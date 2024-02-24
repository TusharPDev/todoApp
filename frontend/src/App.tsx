import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import useLocalStorage from 'use-local-storage';
import { useAtom } from 'jotai';
import { themeToggleAtom } from './jotai-store/atoms/navbarAtom';
import Home from './Components/Home/home';
import Footer from './Components/footer/footer';

function App() {
  const [theme,setTheme] = useAtom(themeToggleAtom)

  return (
    <div style={{backgroundColor: theme.isDark ? "#272829" : "#D8D9DA"}} className="App">
     <Navbar/>
     <div className='main'>
      <Home/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
