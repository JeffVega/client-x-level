import React from 'react'
import {reduxForm, Field} from 'redux-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {required,length} from '../validators'
import {newUser} from '../action/Action_users'
import {login} from '../action/Action_auth'
import Input from './input';
import './sign-up.css'
 class SignForm extends React.Component {


    submitForm(values){
        const {username,password} = values;
        const user = {username,password};
      return this.props.dispatch(newUser(user
      )).then(() => this.props.dispatch(login(username, password)));
    }
    render() {
        if(this.props.loggedIn) {
            return <Redirect to="/" />;
        }
        const passwordLength = length({min: 10, max: 72});
        return (
            <form
            className="container"
            onSubmit={this.props.handleSubmit(values =>
                this.submitForm(values)) }>
                <br/>
                <Field 
                component={Input} 
                name="username" 
                type="text"
                label="Username"
                validate={[required]}
                />
                <br />
                <Field 
                component={Input} 
                name="password" 
                type="password" 
                label="Password"
                validate={[required,passwordLength]}
                />
                <br/>
                <button
                        className="button-sign"
                        type="submit">
                        REGISTER 
                    </button>
            </form>
        );
    }
}
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
})  
const connectedSignForm = connect(mapStateToProps)(SignForm);

export default reduxForm({
    form:'registerUser',
    
})(connectedSignForm)