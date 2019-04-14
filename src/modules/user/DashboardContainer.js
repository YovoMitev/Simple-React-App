import React, {Component} from "react";
import {connect} from "react-redux";
import UsersTable from "./components/UsersTable";

class DashboardContainer extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        const {users, currentSignInUser} = this.props;
        const {username} = currentSignInUser;
        /**Remove current logged in user from users arr */
        this.setState({users: users.filter(user => user.username !== username)})
    }

    render() {
        const {users} = this.state;
        return (
            <div>
                {
                    users.length !== 0
                        ? <UsersTable
                            users={users}
                        />
                        : <h2>No users to show !</h2>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.user.users,
        currentSignInUser: state.user.currentSignInUser
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardContainer);
