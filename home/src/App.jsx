import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { HomePageContent } from "./HomePageContent";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <div>
    <Header />
    <div>
      <HomePageContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
