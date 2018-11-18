import React from 'react'
import LoginIn from './sign-in'
import {Link} from 'react-router-dom'
import Header from './Header/Header'
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
                    <Link className="information" to="/home">
                    <p>information</p>
                    </Link>
                    {/* <SignUp/> */}
                </div>
            </div>
        )
    }
}