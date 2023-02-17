import { useEffect, useState } from 'react'
import "./About.css"
import AnimatedLetters from './Animated'
import Sphere from './Sphere'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
   

      <div className="about-page ">
        <div className="text-zone " >
          <div className='about-heading heading1'>
          <h1 style={{color:"#05e2ff",fontFamily:"-moz-initial"}}>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
              style={{fontSize:"5rem"}}
              />
          </h1>
          </div>
          <p>
            Hello! My name is Yash Kumar Daswani, a self-taught passionate Full-Stack Web Developer from India .I enjoy creating things that live on the internet.
            I've made countless side projects and I also posses magical powers of using react to build delightful user interfaces.
          </p>
          <p align="LEFT">
            Currently, I'm persuing  B-Tech degree in Computer Science Branch from Gurukul Kangri Deemed to be University, learning Web
            development using react, and trying to do competitive programming in
            C++.
          </p>
         
        <a href="https://drive.google.com/file/d/13X2jCQpKJWF8mSU3WiMBusB_PhL3N_yF/view?usp=drivesdk" className="contact-button">
                <div>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">
                        Download Resume
                    </span>
                </div>
            </a>
        </div>
        <div className="about_sphere">
          <Sphere/>
        </div>
        </div>
      {/* <Loader type="pacman" /> */}
             
     
    </>
  )
}

export default About
