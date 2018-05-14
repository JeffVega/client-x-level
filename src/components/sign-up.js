import React from 'react'
import SignUp from './sign-form'
import {Link} from 'react-router-dom'
import Header from './Header/header-wo'
export default class LoginPage extends React.Component {

    render() {
        return (

            <div >

                <Header/>
               
                <div className="sign-up">

                    <SignUp/>
                    <Link className="signup-banner" to="/">
                        <br/>
                        <p>Sign In</p>
                    </Link>
                </div>
            </div>
        )
    }
}