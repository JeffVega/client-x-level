import React from 'react'
import LoginIn from './LoginForm'
import {Link} from 'react-router-dom'
// Login Page Form
export default class LoginPage extends React.Component {

    
    render() {
   
        return (
                <div className="loginPage">
                    <div className="loginPage_container">

                    
                    <LoginIn/>
                        
                        <Link className="loginPage__info-btn" to="/home">
                            <p className="dash-link">Dashboard</p>
                        </Link>
                        </div>
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
			
		</div>
	</div>
</div>
               
        )
    }
}