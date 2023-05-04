import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact'
import NotFound from '../Pages/NotFound'
import Nav from '../Components/Header/Nav';
import Navbar from '../Components/Header/Navbar';
import Background from '../Components/Search/Background';
import Carousel from '../Components/SliderCarousel/Carousel';
import Category from '../Components/Category/Category';

const Main = () => {

  // const items = [
  //   {
  //     image: 'https://via.placeholder.com/150',
  //     title: 'Product 1'
  //   },
  //   {
  //     image: 'https://via.placeholder.com/150',
  //     title: 'Product 2'
  //   },
  //   {
  //     image: 'https://via.placeholder.com/150',
  //     title: 'Product 3'
  //   }
  // ];

  return (
    <>
    <div>
    <Nav/>
    <Navbar/>
    <Background/>
    <Carousel/>
    {/* <Category/> */}
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