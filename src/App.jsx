import { useState } from 'react'                              // IMPORT 'useState' HOOK FROM REACT LIBRARY
import './App.css'                                            // IMPORT STYLESHEET FOR APP COMPONENT
import {
  BrowserRouter as Router,                                    // Import router component
  Routes,                                                     // Import Routes component for: Route paths
  Route,                                                      // Import Route component for: individual routes
} from 'react-router-dom';
import About from './components/About/About';                 // LOAD ABOUT SECTION
import Footer from './components/Footer/Footer';              // LOAD FOOTER SECTION
import Navigation from './components/Navigation/Navigation';  // LOAD NAV SECTION
import Portfolio from './components/Portfolio/Portfolio';     // LOAD PORTFOLIO SECTION
import Resume from './components/Resume/Resume';              // LOAD RESUME SECTION
import Home from './components/Home/Home';                    // LOAD HOME SECTION

function App() {                                            // DEFINE 'App' COMPONENT FUNCTION
  return (
    <>
      <Router> 
      <Navigation /> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
      <Footer />
    </>
  );
}



export default App    // EXPORT 'App' COMPONENT
