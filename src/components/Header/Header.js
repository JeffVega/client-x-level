import React from 'react'
import Nav from './nav'
import logo from '../Utils/Imgs/logo.png'

export default function header(props){
      
  
    return (
      <div className="landing">
        <header  className="header" >
          <div>
          <img src={logo} className="landingPage__banner" alt="man-holding-bar"/>
          </div>
         <Nav/>
         </header>
       
      </div>
  );
  }