import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  
   <Router>
      <Routes>
        <Route exact path="/" element= {loading? <Loader/>:<Home/>} />
        <Route exact path="/about" element= {loading? <Loader/>:<About/>} />
        <Route exact path="/skill" element= {loading? <Loader/>:<Skills/>} />
        <Route exact path="/contact" element= {loading? <Loader/>:<Contact/>} />
        </Routes>
      </Router>
   </>
  );
}

export default App;
