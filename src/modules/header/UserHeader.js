import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {logoutAction} from "../../redux/actions/user/actions";

class UserHeader extends Component {
    render() {
        const {user, logoutAction, history} = this.props;
        const {username} = user;
        return (
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">{username}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" onClick={() => {
                        logoutAction();
                        history.push("/");
                    }} to="#">Log out</Link>
                </li>
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.currentSignInUser ? state.user.currentSignInUser : ""
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logoutAction: () => dispatch(logoutAction())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserHeader);