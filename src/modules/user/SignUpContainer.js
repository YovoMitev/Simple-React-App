import React, {Component} from "react";
import {connect} from "react-redux";
import {signUpAction} from "../../redux/actions/user/actions";
import SignUpForm from "./components/SignUpForm";

class SignUpContainer extends Component {
    state = {
        user: {
            name: "",
            username: "",
            password: ""
        },
        errors: {
            name: "",
            username: "",
            password: ""
        },
        message: ""
    };

    clearErrors = () => {
        const errors = {
            name: "",
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
        const {registeredUsername, signUpAction, history} = this.props;
        if (registeredUsername.includes(user.username)) {
            this.setState({message: `User exist with given username : ${user.username}`});
            return;
        }
        signUpAction(user);
        history.push("/sign-in");
    };

    validateForm = (formData) => {
        let isValid = true;
        let errors = {};
        const {name, username, password} = formData;

        if (name.length < 3) {
            isValid = false;
            errors.name = "Name must be at least 3 symbols !";
        }
        if (username.length < 3) {
            isValid = false;
            errors.username = "Username must be at least 3 symbols !";
        }
        if (username.includes(" ")) {
            isValid = false;
            errors.username = "Spaces for username is not allow !";
        }
        if (password < 3) {
            isValid = false;
            errors.password = "Username must be at least 3 symbols !";
        }
        return {errors, isValid};
    };

    render() {
        const {user, errors, message} = this.state;
        const {name, username, password} = user;

        return (
            <div>
                <h2>Sign-Up Form</h2>
                <h3>{message}</h3>
                <SignUpForm
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                    name={name}
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
        registeredUsername: state.user.registeredUsername
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signUpAction: (user) => dispatch(signUpAction(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpContainer);
