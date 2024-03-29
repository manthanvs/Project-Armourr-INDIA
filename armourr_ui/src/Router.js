import './Router.css';

import React,{useState} from 'react';
import { BrowserRouter , Routes , Route} from "react-router-dom";

import Header from './Components/header/Header.component.js';
import Footer from './Components/footer/Footer.component.js';
import home from './Components/home/home.component.js';
import products from './Components/products/products.component.js';
import about from './Components/about/about.component.js';
import contact from './Components/contact/contact.component.js';

import form from './Components/form/form.component.js';




function Router() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if(spinner){
    setTimeout(() => {
      spinner.style.display="none";
      setLoading(false);
    }, 1000);
  }

  return (
    !loading && (
      <BrowserRouter>
      <Header/>
      <Routes>
            <Route exact path="/" Component={home}></Route> 
            <Route exact path="/about" Component={about}></Route>
            <Route exact path="/products" Component={products}></Route>
            <Route exact path="/contact"  Component={contact}></Route>
            <Route exact path="/form"  Component={form}></Route>
      </Routes>
      <Footer/>       
      </BrowserRouter>)
  )
}

export default Router;