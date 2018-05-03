import React from 'react'
import LoginIn from './sign-in'
import {Link} from 'react-router-dom'
import photo from './video/photo_1.jpg'

const style = {
  width:"100%",
  heigth:"100vh",
  background:`url(${photo}) !important`
}
export default class LoginPage extends React.Component{

  render(){
    return(
      
      <div >
        
      <h1 role="banner" className="banner">X-LEVEL</h1>
      <div className="sign-up" style={style}>

      <LoginIn/>
      <Link to="/signup">
        <p>SignUp</p>
      </Link>
      {/* <SignUp/> */}
      </div>
      </div>
    )
  }
}