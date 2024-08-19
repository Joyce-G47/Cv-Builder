import React from "react";
import Home from "./pages/home/Home.js";
import Coverletter from "./pages/coverLetter/Coverletter.js";
import Templates from "./pages/templates/Templates.js";
import "./App.css";
import Header from "./components/Layout/header/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Coverletter />
      <Templates />
    </div>
  );
}

export default App;
