import React ,{useEffect,useState}from 'react'
import './About.css'
import './Skills.css'
import AnimatedLetters from './Animated'
import SkillBar from './SkillBar'
const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
    <div className="skill-page " > 
        <div className="text-zone1" >
          <div className='about-heading'>
          <h1 style={{color:"#05e2ff",fontFamily:"-moz-initial",fontSize:"3.5rem"}}>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M','y',' ','S','k','i','l','l','s']}
              idx={15}
              />
          </h1>
          </div>
          <p>
          I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, ReactJS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
          </p>
          <p align="LEFT">
          I also have full-stack developer experience with Nodejs, Expressjs, MongoDb and others .
          </p>
          
        </div>
        <div className="skillbarcontainer">
         <SkillBar/>
        </div>
        </div>

              </>
  )
}

export default Skills
