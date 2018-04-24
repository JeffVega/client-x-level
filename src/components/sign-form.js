  import React from 'react'
import './sign-up.css'

export default class LoginForm extends React.Component{
constructor(){
  super();
  this.state = {
    username:"",
    password:""
  }
}
handleUsernameChanged(event){
  this.setState({
    username:event.target.value
  })
}

handlePasswordChanged(event){
  this.setState({
    password:event.target.value
  })
}
submitForm(event){
  event.preventDefault();
}
render(){
  console.log('state',this.state)
  return (
    <form 
    onSubmit={this.submitForm.bind(this)}
    className="container">
    <label htmlFor="uname"><b>Username</b></label>
    <input type="text"    
    value={this.state.username}
    onChange={this.handleUsernameChanged.bind(this)}
     placeholder="Enter Username"
      name="uname" 
      required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password"
    value={this.state.password}
    onChange={this.handlePasswordChanged.bind(this)}
     placeholder="Enter Password"
      name="psw" 
      required/>
      
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" name="remember"/> Remember me
    </label>
  </form>
  );
  }
}
