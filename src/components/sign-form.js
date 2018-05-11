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
  event.preventDefault();
  
   fetch(`${API_BASE_URL}/users`, {
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
    event.target.username.value = ""
    event.target.psw.value = ""
}
render(){
  return (
    <form 
    onSubmit={this.submitForm.bind(this)}
    className="container">
    <h3 className="inputs"> Sign Up </h3>
    <br/>
    <label className="inputs" htmlFor="uname"><b>Username</b></label>
    <br/>
    <input type="text"   
    name="username"
    onChange={this.handleUsernameChanged.bind(this)}
     placeholder="Enter Username"
     
      required/>
    <br/><br/>
    <label className="inputs" htmlFor="psw"><b>Password</b></label>
    <br/>
    <input type="password"
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
