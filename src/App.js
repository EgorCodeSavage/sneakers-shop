import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./main.css"

import NavBar from "./components/Nav/NavBar";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>

        </Router>
      </div> 
    </div>
  ); 
}

export default App;
 