import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import Products from "./components/Products";
import Logo from "./components/Logo";

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Logo>

      </Logo>
      <Products>

      </Products>
      </App>    
    
    
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

