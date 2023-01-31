import "./App.css";
import React from 'react'
import Header from "./components/Header";
import Products from "./components/Products";
import Logo from "./components/Logo";
import { data } from "./components/data";



function App() {
  return (
   <div>
    <Logo >  </Logo>  
    <Header />
   
   <Products />   
    

    
   </div>
  );
}

export default App;
