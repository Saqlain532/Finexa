import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import About from './landing_page/about/AboutPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/products' element={<ProductPage/>} />
    <Route path='/pricing' element={<PricingPage/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/support' element={<SupportPage/>} />
    <Route path='*'  element={<NotFound/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
);


