import './Navbar.css'
import React from 'react'
import Home from "../../node_modules/@material-ui/icons/Home"
import Info from '../../node_modules/@material-ui/icons/Info'
import ContactMail from '../../node_modules/@material-ui/icons/ContactMail'
import GitHub from '../../node_modules/@material-ui/icons/GitHub'
import Instagram from '../../node_modules/@material-ui/icons/Instagram'
import Linkdin from '../../node_modules/@material-ui/icons/LinkedIn'
import  Reviews  from '../../node_modules/@material-ui/icons/RateReview'
import yd from "../yd.png"
const Navbar = () => {
  return (
    <div className='navbar'>
            <div className='logo'>
              <a href='/'>
              <img src={yd} alt="..."style={{width:"4rem"}} /> 
              </a>
            </div>
        <div className='nav'>
          <div className='nav-centre'>
             <a href='/'>
                    <div className='icon'>
                   <Home/>

                    </div>
                   </a>
                   
                   <a href='/about' className='info'>
                   <Info/>
                   </a>
                   <a href='/skill' className='skillimg'>
                   <Reviews/>
                   </a>
                   
                   <a href='/contact' className='contact'>
                   <ContactMail/>
                   </a>
              </div>

              <div className='nav_end'>
                <a href='https://github.com/yashdaswani'>
                    <GitHub/>
                </a>
                <a href='https://www.instagram.com/yash__daswani' >
                    <Instagram/>
                </a>
                <a href='https://www.linkedin.com/in/yash-daswani-a3b347202/'>
                    <Linkdin/>
                </a>
              </div>
              </div>
    </div>
  )
}

export default Navbar
