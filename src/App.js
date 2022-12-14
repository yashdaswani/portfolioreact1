import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { useEffect,useState } from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Loader from "./components/Loader";


function App() {
  const[loading,setloading]=useState(false)
  useEffect(()=>{
  setloading(true);
  setTimeout(()=>{
    setloading(false)
  },2000);
  },[])
  return (
   <>
   
   <Navbar/>
   <BrowserRouter>
           <Routes>
          <Route path="/"  element={ loading? <Loader/>:<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skill" element={loading? <Loader/>:<Skills/>} />
          <Route path="/contact" element={loading? <Loader/>:<Contact/>} />
          </Routes>
    </BrowserRouter>
  
   </>
  );
}

export default App;
