import React from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
// import Header from "home/components/Header/Header";
import Test from "home/Test";

import "./index.css";

const App = () => (
  <div className="container">
    <Test />

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
