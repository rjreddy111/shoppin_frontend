import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home"
import HomeWrapper from "./components/HomeWrapper";
import Products from "./components/Products";

import logo from './logo.svg';


import './App.css';

const App = ()=> {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<HomeWrapper/>}/> 
        <Route path = "/getstarted" element={<Products/>}/>

      </Routes>
    </Router>
  )
}

export default App;
