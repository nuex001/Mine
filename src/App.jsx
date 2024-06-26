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
import Fauctnet from './components/pages/100Projects/Fauctnet';
import Memes from './components/pages/Memes';
import TgBot from './components/pages/100Projects/TgBot';
import Quizapp from './components/pages/100Projects/Quizapp';

function App() {

  return (
    <BrowserRouter>
    <div className="container">
      <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/project/:id" element={<Project/>}/>
        <Route exact path="/Daoprj" element={<Daoprj/>}/>
        <Route exact path="/memes" element={<Memes/>}/>
        <Route exact path="/Etherscanprj" element={<EtherscanPrj/>}/>
        <Route exact path="/Invprj" element={<Invprj/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        {/* 100 daily projects */}
        <Route exact path="/ratonsol" element={<Ratonsol/>}/>
        <Route exact path="/faucet" element={<Fauctnet/>}/>
        <Route exact path="/tgbot" element={<TgBot/>}/>
        <Route exact path="/quiz" element={<Quizapp/>}/>
      </Routes>
      <Footer/>
    </div>
  </BrowserRouter>
  )
}

export default App
