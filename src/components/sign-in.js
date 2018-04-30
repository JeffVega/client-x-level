import React from 'react'
import {API_BASE_URL} from '../config'
import { connect } from 'react-redux';
import { login } from '../action/auth'



 class LoginForm extends React.Component{
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
  return this.props.dispatch(login(
    this.state.username,
    this.state.password
  ));
 
}
render(){
  console.log('this is my login',this.state)
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
      
    <button type="submit">Sign In</button>
 
  </form>
  );
  }
}
// this.props.user = state.auth
const mapStateToProps = (state) =>{
  return {
    user:state.auth,
  }
}

export default connect(mapStateToProps)(LoginForm)