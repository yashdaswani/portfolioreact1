import React from 'react'
import './SkillBar.css'
const SkillBar = () => {
  return (
    <div class="container_skillbar">
  <div class="col">
    
    <ul class="skill">
      <li><span class="blueline html"></span><em>HTML</em></li>
      <li><span class="greenline css"></span><em>CSS</em></li>
      <li><span class="redline javascript"></span><em>Javascript</em></li> 
      <li><span class="yellowline react"></span><em>Reactjs</em></li>
      <li><span class="pinkline node"></span><em>Nodejs</em></li>
      <li><span class="cyanline express"></span><em>Express</em></li>
      <li><span class="orangeline mongo"></span><em>MongoDB</em></li>
    </ul>
  </div>
  </div>
  )
}

export default SkillBar
