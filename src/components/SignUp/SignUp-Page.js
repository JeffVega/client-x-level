import React from 'react'
import SignUp from './SignUpForm'
import {Link} from 'react-router-dom'

export default class LoginPage extends React.Component {

    render() {
        return (

            <div className='SignUpPage'>

                <div className="SignUpPage__formContainer">

                    <SignUp/>
                    <Link className="SignUpPage__create-btn" to="/signup">
                        <p>Create an Account</p>
                    </Link>
                    <Link className="SignUpPage__info-btn" to="/home">
                        <p>Information</p>
                    </Link>

                </div>
            </div>
        )
    }
}