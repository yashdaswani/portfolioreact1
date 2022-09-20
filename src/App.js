import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
   <Switch>
            <Route exact path="/">
              {loading? <Loader/>:<Home/>}
            </Route>
            <Route exact path="/about">
            {loading? <Loader/>:<About/>}
            </Route> 
            <Route exact path="/contact">
            {loading? <Loader/>:<Contact/>}
            </Route> 
            <Route exact path="/skill">
            {loading? <Loader/>:<Skills/>}
            </Route>
          </Switch>
      </Router>
   </>
  );
}

export default App;
