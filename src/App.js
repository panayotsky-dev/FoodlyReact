import "./App.css";
import React from 'react'
import Header from "./components/Header";
// import Products from "./components/Products"; 
import recipeData from "./components/recipeData.js"
import Search from "./components/Search.jsx"

// holder div last class -  tc ma0 pa4 min-vh-100


function App() {
  return (
   <div>
    <Header />
   
   {/* <Products />    */}
    
   <div className="cards-holder">
      <Search details={recipeData}/>
    </div>
    
   </div>
  );
}

export default App;