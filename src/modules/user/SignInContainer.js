import React, {Component} from "react";
import {connect} from "react-redux";
import SignInForm from "./components/SignInForm";

class SignInContainer extends Component {
    state = {
        user: {
            username: "",
            password: ""
        },
        errors: {
            username: "",
            password: ""
        },
        message: ""
    };

    clearErrors = () => {
        const errors = {
            username: "",
            password: ""
        };
        this.setState({errors});
    };

    handleInput = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        let user = Object.assign({}, this.state.user);
        user[name] = value;

        this.setState({user});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {user} = this.state;
        const {errors, isValid} = this.validateForm(user);
        if (!isValid) {
            this.setState({errors});
            return;
        }
        this.clearErrors();
    };

    validateForm = (formData) => {
        let isValid = true;
        let errors = {};
        const {username, password} = formData;

        if (username.length < 3) {
            isValid = false;
            errors.username = "Username must be at least 3 symbols !";
        }
        if (password < 3) {
            isValid = false;
            errors.password = "Username must be at least 3 symbols !";
        }
        return {errors, isValid};
    };

    render() {
        const {user, errors, message} = this.state;
        const {username, password} = user;

        return (
            <div>
                <h2>Sign-In Form</h2>
                <h3>{message}</h3>
                <SignInForm
                    handleSubmit={this.handleSubmit}
                    handleInput={this.handleInput}
                    username={username}
                    password={password}
                    errors={errors}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);
