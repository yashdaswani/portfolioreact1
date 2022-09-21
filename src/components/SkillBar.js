import React from 'react'
import './SkillBar.css'
const SkillBar = () => {
  return (
    <div className="container_skillbar">
  <div className="col">
    
    <ul className="skill">
      <li><span className="blueline html"></span><em>HTML</em></li>
      <li><span className="greenline css"></span><em>CSS</em></li>
      <li><span className="redline javascript"></span><em>Javascript</em></li> 
      <li><span className="yellowline react"></span><em>Reactjs</em></li>
      <li><span className="pinkline node"></span><em>Nodejs</em></li>
      <li><span className="cyanline express"></span><em>Express</em></li>
      <li><span className="orangeline mongo"></span><em>MongoDB</em></li>
    </ul>
  </div>
  </div>
  )
}

export default SkillBar
