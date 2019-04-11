import React from 'react'
import {Field, reduxForm, focus} from 'redux-form';
import {login} from '../../action/Action_auth'
import {withRouter} from 'react-router-dom'
import Input from '../Utils/input';

//Login Page

class LoginForm extends React.Component {

    submitForm(values) {
        return this
            .props
            .dispatch(login(values.username, values.password))
            .then(() => this.props.history.push('/dash'))
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
            <div className="loginPage">                    
                <div className="loginPage__test">
                        <h3>Test Login</h3>
                            <p>Login:test1</p>
                            <p>Pass:12345678910</p>
                    </div>
                <form
                    onSubmit={this
                    .props
                    .handleSubmit(values => this.submitForm(values))}
                    className="loginForm">

                    {error}
                    <h3 className="loginForm__loginInfo">Member Login</h3>
                    <Field
                        className="field"
                        component={Input}
                        type="text"
                        name="username"
                        placeholder="Username"/>

                    
                    <Field
                        className="field"
                        component={Input}
                        type="password"
                        name="password"
                        placeholder="Password"/>

                    <button type="submit" id="loginForm__btn">LOGIN</button>

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