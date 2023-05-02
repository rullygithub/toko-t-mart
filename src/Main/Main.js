import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact'
import NotFound from '../Pages/NotFound'
import Nav from '../Components/Header/Nav';
import Navbar from '../Components/Header/Navbar';
import Background from '../Components/Search/Background';
import Carousel from '../Components/SliderCarousel/Carousel';

const Main = () => {
  return (
    <>
    <div>
    <Nav/>
    <Navbar/>
    <Background/>
    <Carousel/>
    </div>
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" Component={NotFound} />
      </Routes>
     </Router>
     
    </>
  )
}

export default Main