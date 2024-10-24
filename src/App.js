import React from "react";

import {BrowserRouter,Route,Routes} from "react-router-dom"

import About from "./pages/About";
import Alumni from "./pages/Alumni";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />}/>

      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/about" element={<About />}/>
      <Route  path="/alumni/:id" element={<Alumni />}/>
      <Route  path="/alumni" element={<Alumni />}/>
      
    </Routes>
    </BrowserRouter>
  );
};

export default App;
