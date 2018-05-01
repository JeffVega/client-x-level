  import React from 'react'
import './sign-up.css'
import {API_BASE_URL} from '../config'
export default class SignForm extends React.Component{
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
  console.log(event)
  event.preventDefault();
  
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    body:JSON.stringify({
      "username":this.state.username,
      "password":this.state.password
    }),
    headers:{
      "Content-Type": "application/json"
    }
})        
    .then(response => response.json())
    .catch(err => {
        console.log(err)
    })
}
render(){
  console.log('what state is this',this.state)
  return (
    <form 
    onSubmit={this.submitForm.bind(this)}
    className="container">
    <label htmlFor="uname"><b>Username</b></label>
    <br/>
    <input type="text"    
    value={this.state.username}
    onChange={this.handleUsernameChanged.bind(this)}
     placeholder="Enter Username"
      name="uname" 
      required/>
    <br/><br/>
    <label htmlFor="psw"><b>Password</b></label>
    <br/>
    <input type="password"
    value={this.state.password}
    onChange={this.handlePasswordChanged.bind(this)}
     placeholder="Enter Password"
      name="psw" 
      required/>
      <br/><br/>
    <button className="button-sign" type="submit">Sign Up</button>
 
  </form>
  );
  }
}
