import React from 'react';
import {Footer, HeroSection, Navbar} from "./workshop_components/Navbar";
import About from "./workshop_components/About";
import Contact from "./workshop_components/Contact";
import Services from "./workshop_components/Services";
import {Routes,Route} from "react-router-dom";
import Profile from "./workshop_components/Profile";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/*" element={<p>Incorrect Selection</p>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
