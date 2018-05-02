import React from 'react'
import { connect } from 'react-redux';
import { login } from '../action/Action_auth'
import {withRouter} from 'react-router-dom'



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
  )).then(() => this.props.history.push('/cal'))
  event.target.uname.value = ""
  event.target.psw.value = ""
}
render(){
  console.log('this is my login',this.state)
  return (
    <form 
    onSubmit={this.submitForm.bind(this)}
    className="container">
    <h3> Login In </h3>
    <br/>
    <label htmlFor="uname"><b>Username</b></label>
    <br/>
    <input type="text"    
    onChange={this.handleUsernameChanged.bind(this)}
     placeholder="Enter Username"
      name="uname" 
      required/>
    <br/><br/>
    <label htmlFor="psw"><b>Password</b></label>
    <br/>
    <input type="password"
    onChange={this.handlePasswordChanged.bind(this)}
     placeholder="Enter Password"
      name="psw" 
      required/>
      <br/><br/>
    <button 
    className="button-sign"
    type="submit">Sign In</button>
    <br/><br/>
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

export default withRouter( connect(mapStateToProps)(LoginForm))