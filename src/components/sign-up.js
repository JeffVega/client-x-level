import React from 'react'
import SignUp from './sign-form'
import {Link} from 'react-router-dom'
export default class LoginPage extends React.Component{
  
  render(){
    return(
      
      <div >
        
      <h1 role="banner" className="banner">X-LEVEL</h1>
      <div className="sign-up">
      
      <SignUp/>
      <Link to="/">
        <p>Sign In</p>
      </Link>
      </div>
      </div>
    )
  }
}