import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import {logoutAction} from "../../redux/actions/user/actions";

class UserHeader extends Component {
    render() {
        const {user, logoutAction, history} = this.props;
        const {username} = user;
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">{username}</Navbar.Brand>
                <Nav className="mr-auto">
                    <Navbar.Brand>
                        <Link style={{textDecoration: 'none'}} to="/dashboard">Dashboard</Link>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Link style={{textDecoration: 'none'}} onClick={() => {
                            logoutAction();
                            history.push("/");
                        }} to="#">Log out</Link>
                    </Navbar.Brand>
                </Nav>
            </Navbar>
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