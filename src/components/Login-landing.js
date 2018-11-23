import React from 'react'
import LoginIn from './sign-in'
import {Link} from 'react-router-dom'
import './login-landing.css'
export default class LoginPage extends React.Component {

    render() {
        return (

            <div className='login_landing_page'>

                <div className="sign_up_form">

                    <LoginIn/>
                    <Link className="signup-banner" to="/signup">
                        <p>Create an Account</p>
                    </Link>
                    <Link className="information" to="/home">
                        <p>Information</p>
                    </Link>

                </div>
            </div>
        )
    }
}