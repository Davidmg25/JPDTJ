import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ServicesCar from './components/ServicesCar';
import Checkout from './components/Checkout';
import WhatsAppBubble from './components/WhatsAppBubble'; 
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { ServiceProvider } from './context/ServiceContext';
import './server/database';
import AboutUs from './components/Aboutus';
import OurJobs from './components/OurJobs';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { useEffect } from 'react';


function AppWrapper() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/checkout") {
      document.body.style.backgroundColor = "gray";
    } else {
      document.body.style.backgroundColor = "gray"; 
    }
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesCar />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/OurJobs" element={<OurJobs />} />
        <Route path="/Aboutus" element={<AboutUs />} />
      </Routes>
      <WhatsAppBubble />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ServiceProvider>
        <Router>
          <AppWrapper />
        </Router>
      </ServiceProvider>
    </ThemeProvider>
  );
}

export default App;
