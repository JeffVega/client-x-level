import React from 'react'
import {Field, reduxForm, focus} from 'redux-form';
import {login} from '../action/Action_auth'
import {withRouter} from 'react-router-dom'
import Input from './input';
import './sign-in.css'

class LoginForm extends React.Component {

    submitForm(values) {
        return this
            .props
            .dispatch(login(values.username, values.password))
            .then(() => this.props.history.push('/cal'))
    }
    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div>                    
                <div className="testlogin">
                        <h3>Test Login</h3>
                            <p>Login:test1</p>
                            <p>Pass:12345678910</p>
                    </div>
                <form
                    onSubmit={this
                    .props
                    .handleSubmit(values => this.submitForm(values))}
                    className="container_login_form">

                    {error}
                    <label htmlFor="member_login">Member Login</label>
                    <Field
                        className="field"
                        component={Input}
                        type="text"
                        name="username"
                        placeholder="Username"/>
                    <br/>
                    <label htmlFor="password">Password</label>
                    <Field
                        className="field"
                        component={Input}
                        type="password"
                        name="password"
                        placeholder="Password"/>
                    <br/>
                    <button type="submit" id="login-button">LOGIN</button>
                    <br/><br/>
                </form>
            </div>
        );
    }
}
// this.props.user = state.auth

export default withRouter(reduxForm({
    form: 'login',
    onSubmitFail: (error, dispatch) => {
        dispatch(focus('login', 'username'))
    }

})(LoginForm));