import React from "react";
import ReactDOM from "react-dom";
import Test from "home/Test";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

const App = () => (
  <div>
    <Router>
      <SafeComponent>
        <Routes>
          <Route path="/product/:id" element={<PDPContent />} />
          <Route path="/" element={<Test name={"PDP"} />} />
        </Routes>
      </SafeComponent>
    </Router>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
