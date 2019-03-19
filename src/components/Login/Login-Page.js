import React from 'react'
import LoginIn from './LoginForm'
import {Link} from 'react-router-dom'
// Login Page Form
export default class LoginPage extends React.Component {

    render() {
        return (

            <div >

               
                <div className="login_landing_page">
                <div className="sign_up_form">

                    <LoginIn/>
                    <Link className="signup-banner" to="/signin">
                        <br/>
                        <p>Sign In</p>
                    </Link>
                    <Link className="information" to="/home">
                        <p>Information</p>
                    </Link>
                </div>
                </div>
            </div>
        )
    }
}