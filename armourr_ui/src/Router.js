import './Router.css';

import React from 'react';
import { BrowserRouter , Routes , Route} from "react-router-dom";

import Header from './Components/header/Header.component.js';
import Footer from './Components/footer/Footer.component.js';
import home from './Components/home/home.component.js';
import details from './Components/details/details.component.js';
import about from './Components/about/about.component.js';
import contact from './Components/contact/contact.component.js';




function Router() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
            <Route exact path="/" Component={home}></Route> 
            <Route exact path="/about" Component={about}></Route>
            <Route exact path="/details" Component={details}></Route>
            <Route exact path="contact" Component={contact}></Route>
      </Routes>
      <Footer/>       
      </BrowserRouter>
  )
}

export default Router;