import React from 'react'
import './Header.css'
import logo from '../photos/logo.png'

export default function header(props){
      
  
    return (
      <div>
        <header role="banner" >
      
        <h1  className="banner"/>
          <img className="image-1"src={logo} />
            
        </header>
      </div>
  );
  }