import React from 'react'
import './Header.css'
import logo from '../photos/logo.png'
export default function header(props){
      
  
    return (
      <div>
        <header role="banner" >
      
        <h1  className="banner"> Food & Workout Dairy</h1>
          <img className="image-1"src={logo} alt="logo for x-level" />
            
        </header>
        <div className="testlogin">
                    <p>Login:test1</p>
                    <p>Pass:12345678910</p>
                </div>
      </div>
  );
  }