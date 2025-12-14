import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/layouts/Footer';

function App() {

  return (
    <BrowserRouter>
    <div className="container">
      <ScrollToTop/>
      <Routes>
        <Route exact path="/*" element={<Home/>}/>
       
      </Routes>
      <Footer/>
    </div>
  </BrowserRouter>
  )
}

export default App
