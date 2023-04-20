import './Router.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Components/header/Header.component.js';
import Home from './Components/home/home.component.js';
import Details from './Components/details/details.component.js';
import About from './Components/about/about.component.js';
import Contact from './Components/contact/contact.component.js';
import Footer from './Components/footer/Footer.component.js';




function Router() {
  return (
      <BrowserRouter>
          <Header/>
          <Home/>
          <Details/>
          <About/>
          <Contact/>
          <Footer/>       
      </BrowserRouter>
  )
}

export default Router;