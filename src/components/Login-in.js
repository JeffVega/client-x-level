import React from 'react'
import LoginIn from './sign-in'
import SignUp from './sign-form'
export default class LoginPage extends React.Component{
  render(){
    return(
      <div>
      <LoginIn/>
      <SignUp/>
      </div>
    )
  }
}