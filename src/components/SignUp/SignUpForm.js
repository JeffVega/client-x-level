import React from 'react'
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import {required,length} from '../../validators'
import {newUser} from '../../action/Action_users'
import {login} from '../../action/Action_auth'
import Input from '../Utils/input';

// SignUp Page
 class SignForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
    }

    submitForm(values){
        const {username,password} = values;
        const user = {username,password};
      return this.props.dispatch(newUser(user
      )).then(() => this.props.dispatch(login(username, password)))
      .then(this.setState({ msg: 'Thank you for signing up! Please login.' })
    
      )}
    render() {

        
        const passwordLength = length({min: 10, max: 72});
        return (
            <div className="sign_up_page">
            {this.state.msg ? this.state.msg : ''}
            <form
            className="sign_up_page_form"
            onSubmit={this.props.handleSubmit(values =>
                this.submitForm(values)) }>
                <br/>
                <h3>Sign Up</h3>
                <label htmlFor="username">Username</label>
                <Field 
                className="field"
                component={Input} 
                name="username" 
                type="text"               
                validate={[required]}
                />
                <br />
                <label htmlFor="password">Password</label>
                <Field 
                className="field"
                component={Input} 
                name="password" 
                type="password" 
                validate={[required,passwordLength]}
                />
                <br/>
                <button
                       id='login-button'
                        type="submit">
                        REGISTER 
                    </button>
            </form>
            </div>
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