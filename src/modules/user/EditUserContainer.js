import React, {Component} from "react";
import {connect} from "react-redux";
import {editUserAction} from "../../redux/actions/user/actions";
import EditUserForm from "./components/EditUserForm";

class SignInContainer extends Component {
    state = {
        user: {
            name: "",
            password: ""
        },
        errors: {
            name: "",
            password: ""
        },
        showPassword: false
    };

    componentDidMount() {
        const {currentUser} = this.props;
        this.setState({
            user: {
                name: currentUser && currentUser.name,
                password: currentUser && currentUser.password
            }
        })
    }

    clearErrors = () => {
        const errors = {
            name: "",
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

    handleShowPassword = (e) => {
        const {showPassword} = this.state;
        this.setState({showPassword: !showPassword});
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
        const {history, editUserAction, users, currentUser} = this.props;
        const index = users.findIndex(item => item.username === currentUser.username);
        editUserAction(user, index);
        history.push("/dashboard");
    };

    validateForm = (formData) => {
        let isValid = true;
        let errors = {};
        const {name, password} = formData;

        if (name.length < 3) {
            isValid = false;
            errors.name = "Name must be at least 3 symbols !";
        }
        if (password < 3) {
            isValid = false;
            errors.password = "Username must be at least 3 symbols !";
        }
        return {errors, isValid};
    };

    render() {
        const {user, errors, showPassword} = this.state;
        const {name, password} = user;

        return (
            <div>
                <EditUserForm
                    handleSubmit={this.handleSubmit}
                    handleInput={this.handleInput}
                    handleShowPassword={this.handleShowPassword}
                    showPassword={showPassword}
                    name={name}
                    password={password}
                    errors={errors}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.user.currentSignInUser,
        users: state.user.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editUserAction: (user, index) => dispatch(editUserAction(user, index))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);
