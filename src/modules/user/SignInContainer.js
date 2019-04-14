import React, {Component} from "react";
import {connect} from "react-redux";
import {signInAction} from "../../redux/actions/user/actions";
import SignInForm from "./components/SignInForm";

const MINIMUM_ALLOWED_SYMBOLS = 3;
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
        message: "",
        dataIsPopulated: false
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

        user["username"].length >= MINIMUM_ALLOWED_SYMBOLS
        && user["password"].length >= MINIMUM_ALLOWED_SYMBOLS
        ? this.setState({dataIsPopulated: true})
        : this.setState({dataIsPopulated: false});

        this.setState({user});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let {user} = this.state;
        const {errors, isValid} = this.validateForm(user);
        if (!isValid) {
            this.setState({errors});
            return;
        }
        this.clearErrors();
        const {users, history, signInAction} = this.props;
        let isValidUser = false;

        users.map(currentUser => {
            const {name, username, password} = currentUser;
            if(username === user.username && password === user.password) {
                isValidUser = true;
                user["name"] = name;
            }
        });

        if(!isValidUser) {
            this.setState({message: "Wrong credentials !"})
            return;
        }

        signInAction(user);
        history.push("/dashboard");
    };

    validateForm = (formData) => {
        let isValid = true;
        let errors = {};
        const {username, password} = formData;

        if (username.length < MINIMUM_ALLOWED_SYMBOLS) {
            isValid = false;
            errors.username = "Username must be at least 3 symbols !";
        }
        if (password < MINIMUM_ALLOWED_SYMBOLS) {
            isValid = false;
            errors.password = "Username must be at least 3 symbols !";
        }
        return {errors, isValid};
    };

    render() {
        const {user, errors, message, dataIsPopulated} = this.state;
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
                    dataIsPopulated={dataIsPopulated}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.user.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signInAction: (user) => dispatch(signInAction(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);
