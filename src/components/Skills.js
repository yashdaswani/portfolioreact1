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
          I build effective responsive websites that are quick to load, simple to use, and constructed according to best practises. Front-end programming, including HTML, CSS, JavaScript, and ReactJS, as well as the creation of small and medium-sized web applications, customised plugins, features, animations, and interactive layouts, is my primary area of competence.
          </p>
          <p align="LEFT">
          In addition, I have full-stack development expertise with Nodejs, Expressjs, MongoDb, and other technologies.
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
