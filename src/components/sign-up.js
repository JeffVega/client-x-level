import React from 'react'
import SignUp from './sign-form'
import {Link} from 'react-router-dom'
export default class LoginPage extends React.Component {

    render() {
        return (

            <div >

               
                <div className="login_landing_page">
                <div className="sign_up_form">

                    <SignUp/>
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