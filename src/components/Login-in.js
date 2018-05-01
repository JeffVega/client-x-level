import React from 'react'
import LoginIn from './sign-in'
import SignUp from './sign-form'
import {Link} from 'react-router-dom'
export default class LoginPage extends React.Component{
  
  render(){
    return(
      
      <div >
        
      <h1 role="banner" className="banner">X-LEVEL</h1>
      <div className="sign-up">
      <LoginIn/>
      <SignUp/>
      </div>
      </div>
    )
  }
}