//import React from 'react'; 
//import ReactDOM from 'react-dom/client'; 
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"; 
import Home from "./home" 
import About from "./about"

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-log" to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
