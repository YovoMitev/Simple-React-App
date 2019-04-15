import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteAction} from "../../redux/actions/user/actions";
import UsersTable from "./components/UsersTable";

class DashboardContainer extends Component {
    render() {
        const {deleteAction, users, currentSignInUser} = this.props;
        return (
            <div>
                {
                    users.length !== 0
                        ? <UsersTable
                            users={users}
                            deleteAction={deleteAction}
                            currentSignInUser={currentSignInUser}
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
    return {
        deleteAction: (username) => dispatch(deleteAction(username))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardContainer);
