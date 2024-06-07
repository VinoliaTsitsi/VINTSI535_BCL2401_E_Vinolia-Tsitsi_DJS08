//import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"; 
import Home from "./pages/home" 
import About from "./pages/about"
import Vans from "./pages/vans"
import vanDetail from "./pages/vanDetail"
import Layout from "./components/Layout"

//import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route element={<Layout />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
        <Route path="/vans:id" element={<vanDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
.createRoot(document.getElementById('root'))
.render(<App/>);
