import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import ScrollToTop from './components/ScrollToTop';
import Project from './components/pages/Project';
import Daoprj from './components/pages/Daoprj';
import EtherscanPrj from './components/pages/EtherscanPrj';
import Invprj from './components/pages/Invprj';
import Footer from './components/layouts/Footer';
import Ratonsol from './components/pages/100Projects/Ratonsol';

function App() {

  return (
    <BrowserRouter>
    <div className="container">
      <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/project/:id" element={<Project/>}/>
        <Route exact path="/Daoprj" element={<Daoprj/>}/>
        <Route exact path="/Etherscanprj" element={<EtherscanPrj/>}/>
        <Route exact path="/Invprj" element={<Invprj/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        {/* 100 daily projects */}
        <Route exact path="/ratonsol" element={<Ratonsol/>}/>
      </Routes>
      <Footer/>
    </div>
  </BrowserRouter>
  )
}

export default App
