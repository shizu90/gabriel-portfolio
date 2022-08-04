import React, { useEffect, useContext, useState } from 'react';
import Home from './pages/home/Home';
import Technologies from './pages/Technologies/Technologies';
import Courses from './pages/Courses/Courses';
import Projects from './pages/Projects/Projects';
import theme from './styles/theme';
import Footer from './components/Footer/Footer';
import { ToastContainer } from "./styles/ToastContainer";
import toast, { Toaster } from "react-hot-toast";
import Navbar from './components/Navbar/Navbar';

function App() {
  const [scroll, setScroll] = useState<any>(0);
  const colorScheme = [
    theme.colors.background, 
    theme.colors.backgroundLight, 
    theme.colors.background, 
    theme.colors.backgroundLight];
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(parseInt(`${window.scrollY * 0.2}`));
    })
  }, [scroll])

  const returnNavbarColor = () => {
    if((115 <= scroll && scroll < 305) || scroll > 495) return theme.colors.textDark;
    if((305 <= scroll && scroll < 495) || scroll <= 115) return theme.colors.text;
  }

  return (
    <div>
      <ToastContainer><Toaster toastOptions={{className: "toaster", success: {iconTheme: {primary: theme.colors.primary, secondary: theme.colors.text}}}}/></ToastContainer>
      <Navbar color={returnNavbarColor()}></Navbar>
      <Home color={colorScheme[0]}></Home>
      <Technologies color={colorScheme[1]}></Technologies>
      <Courses color={colorScheme[2]}></Courses>
      <Projects color={colorScheme[3]}></Projects>
      <Footer color={colorScheme[3]}/>
    </div> 
  );
}

export default App;
