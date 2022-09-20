import { useEffect, useState } from 'react'
import './Home.css'
import Y from '../Y.png'
import ph from "../ph.jpg"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

 


  useEffect(()=>{
    setTimeout(()=>{
      setLetterClass('text-animate-hover')
    },4000)
  },[])
  

  return (
    <>
      <div className='container'>

      <div className="home-page" >
        <div className="text-zone col-6 col-sm-6 col-md-4 col-lg-3" >
          <h1 >
            <span className= {letterClass} >H</span> 
            <span className={`${letterClass} _12`} >i,</span>
            <br />
            <span className={`${letterClass} _13`} style={{marginTop:"20px" ,fontFamily:"-moz-initial"}}>I</span>
            <span className={`${letterClass} _14`} >'m</span>
            <img
              src={Y}
              alt="JavaScript Developer Name, Web Developer Name"
              />
             <span className={`${letterClass} _14`} >a</span>
             <span className={`${letterClass} _14`} >s</span>
             <span className={`${letterClass} _14`} >h</span>
             <span className={`${letterClass} _14`} ></span>
             <span className={`${letterClass} _14`} >D</span>
             <span className={`${letterClass} _14`} >a</span>
             <span className={`${letterClass} _14`} >s</span>
             <span className={`${letterClass} _14`} >w</span>
             <span className={`${letterClass} _14`} >a</span>
             <span className={`${letterClass} _14`} >n</span>
             <span className={`${letterClass} _14`} >i</span>
           
            <br />
            <span className={`${letterClass} _14`} >W</span>
            <span className={`${letterClass} _14`} >e</span>
            <span className={`${letterClass} _14`} >b</span>
            <span className={`${letterClass} _14`} ></span>
            <span className={`${letterClass} _14`} >D</span>
            <span className={`${letterClass} _14`} >e</span>
            <span className={`${letterClass} _14`} >v</span>
            <span className={`${letterClass} _14`} >e</span>
            <span className={`${letterClass} _14`} >l</span>
            <span className={`${letterClass} _14`} >o</span>
            <span className={`${letterClass} _14`} >p</span>
            <span className={`${letterClass} _14`} >e</span>
            <span className={`${letterClass} _14`} >r</span>
            <span className={`${letterClass} _14`} >.</span>
            
          </h1>
          <h2>Web Developer / Computer Science Enginner / Learner</h2>
          <a href="/" className="contact-button">
                <div>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">
                        Get In Touch!
                    </span>
                </div>
            </a>
        </div>
        <div className="logo-container " >
          <img
            className="solid-logo "
            src={ph}
            alt="JavaScript,  Developer"
            />
        </div>
      </div>
            </div>

    </>
  )
}

export default Home
