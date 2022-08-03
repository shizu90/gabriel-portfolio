import React, { useEffect, useContext, useState } from 'react';
import Home from './pages/home/Home';
import Technologies from './pages/Technologies/Technologies';
import Courses from './pages/Courses/Courses';
import Projects from './pages/Projects/Projects';
import { ScrollContext } from './context/ScrollContext';
import { ScrollContextType } from './context/@types/scroll';
import theme from './styles/theme';
import Footer from './components/Footer/Footer';
import { ToastContainer } from "./styles/ToastContainer";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const scrollContext = useContext(ScrollContext) as ScrollContextType;
  const colorScheme = [
    theme.colors.background, 
    theme.colors.backgroundLight, 
    theme.colors.background, 
    theme.colors.backgroundLight];

  return (
    <div>
      <ToastContainer><Toaster toastOptions={{className: "toaster", success: {iconTheme: {primary: theme.colors.primary, secondary: theme.colors.text}}}}/></ToastContainer>
      <Home color={colorScheme[0]}></Home>
      <Technologies color={colorScheme[1]}></Technologies>
      <Courses color={colorScheme[2]}></Courses>
      <Projects color={colorScheme[3]}></Projects>
      <Footer color={colorScheme[3]}/>
    </div> 
  );
}

export default App;
