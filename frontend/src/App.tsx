import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import { useAtom } from 'jotai';
import { themeToggleAtom } from './jotai-store/atoms/navbarAtom';
import Home from './Components/Home/home';

function App() {
  const [theme,setTheme] = useAtom(themeToggleAtom)
  return (
    <div style={{backgroundColor: theme.isDark ? "#272829" : ""}} className="App">
     <Navbar/>
     <div className='main'>
      <Home/>
     </div>
    </div>
  );
}

export default App;
