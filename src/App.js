import React from 'react'
import './App.css';  
import Navbar from './component/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Service from './pages/service';
import Footer from './component/footer'



const App = () => {
  return (
 <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path ="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/service" element={<Service />}/>
   </Routes>
   <Footer />
 </BrowserRouter>  
);
} 
export default App;

  
