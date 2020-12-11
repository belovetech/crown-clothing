import React from 'react';

import FormInput from '../../components/form-input/form-input.component';

import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor() {
        super() 
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    };

    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({ [name]: value })
    };

    render() {

        return (
            <div className="sign-up">
                    <h2>I don't have an account</h2>
                    <span>sign up with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="name"
                        type="text"
                        value={this.state.name}
                        handleChange={this.handleChange}
                        label="Display name"
                        required
                    />
                    <FormInput 
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password" 
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput 
                        name="password"
                        type="password"
                        value={this.state.ConfirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <input 
                        className="sign-up-btn"
                        type="submit"
                        value="SIGN UP"
                    />
                </form>
            </div>
        )
    }
}

export default SignUp;