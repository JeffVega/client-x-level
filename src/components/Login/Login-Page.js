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
        
                </div>
        )
    }
}