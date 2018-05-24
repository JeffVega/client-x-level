import React from 'react'
import LoginIn from './sign-in'
import {Link} from 'react-router-dom'
import Header from './Header/header-wo'
import logo from './photos/logo.png'
import Aside from './aside'
import what from './photos/questions.png'
export default class LoginPage extends React.Component {

    render() {
        return (

            <div >

                <Header/>
                <div className="sign-up">

                    <LoginIn/>
                    <Link className="signup-banner" to="/signup">
                        <p>Create an Account</p>
                    </Link>
                    <Link to="/home"><img className="information" src={what} alt="looking for information"/>
                    </Link>
                    {/* <SignUp/> */}
                </div>
            </div>
        )
    }
}