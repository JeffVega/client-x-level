import React from 'react'
import LoginIn from './LoginForm'
import {Link} from 'react-router-dom'
// Login Page Form
export default class LoginPage extends React.Component {

    
    render() {
   
        return (
                <div className="loginPage">
                    
                    <LoginIn/>
                        <Link className="loginPage__signin-btn" to="/signin">
                            <p>Sign In</p>
                        </Link>
                        <Link className="loginPage__info-btn" to="/home">
                            <p>Information</p>
                        </Link>
    <div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-right">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
                <p> Don't have an account Sign Up down below</p>
				<button className="ghost" id="signIn">
                    <Link
                    to="/signup"
                    > Sign Up</Link>
                </button>
			</div>
			<div className="overlay-panel overlay-left">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp">
                    <Link to="/signup"></Link>
                </button>
			</div>
		</div>
	</div>
</div>
               
        )
    }
}