import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact'
import NotFound from '../Pages/NotFound'
import Nav from '../Components/Header/Nav';
import Navbar from '../Components/Header/Navbar';

const Main = () => {
  return (
    <>
    <div>
    <Nav/>
    <Navbar/>
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