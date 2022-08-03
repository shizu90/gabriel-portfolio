import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import App from './App';
import GlobalStyle from "./styles/global";
import Navbar from './components/Navbar/Navbar';
import ScrollProvider from './context/ScrollContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ScrollProvider>
        <GlobalStyle/>
        <Navbar></Navbar>
        <App />
      </ScrollProvider>
    </ThemeProvider>
  </React.StrictMode>
);
