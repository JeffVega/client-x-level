import React from 'react'
import SignUp from './SignUpForm'
import {Link} from 'react-router-dom'

export default class LoginPage extends React.Component {

    render() {
        return (

            <div className='SignUpPage'>

                <div className="SignUpPage__formContainer">

                    <SignUp/>
                   
                    <Link className="SignUpPage__info-btn" to="/home">
                        <p>Return To DashBoard</p>
                    </Link>
                    
                </div>
            </div>
        )
    }
}