/**********************************************************/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";
import App from "./App";

import "./assets/main.css";

/**********************************************************/

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);
