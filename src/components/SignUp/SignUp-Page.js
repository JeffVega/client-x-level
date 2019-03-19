import React from 'react'
import SignUp from './SignUpForm'
import {Link} from 'react-router-dom'

export default class LoginPage extends React.Component {

    render() {
        return (

            <div className='login_landing_page'>

                <div className="login_in_form">

                    <SignUp/>
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