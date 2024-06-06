//import React from 'react'; 
//import ReactDOM from 'react-dom/client'; 
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"; 
import Home from "./pages/home" 
import About from "./pages/about"
import Vans from "./pages/vans"

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-log" to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
