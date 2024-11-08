import React from 'react'
import Home from '../Pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutus from '../Pages/Aboutus';
import Cotntact from '../Pages/Cotntact';
import Products from '../Pages/Products';
import Productdetaildslider from '../Productsdetailsilder/Productdetaildslider';
import Productdetailpage from '../Productdetailpage/Productdetailpage';
import Projectsingle from '../Pages/Projectsingle';

const Routingpage = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about-us" element={<Aboutus/>} />
      <Route path="/contact-us" element={<Cotntact/>} />
      <Route path="/product" element={<Products/>} />
      <Route path="/:id" element={<Projectsingle/>} />
    </Routes>
  </Router>
  )
}

export default Routingpage