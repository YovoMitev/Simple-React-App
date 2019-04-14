import React from "react";
import {connect} from "react-redux";

export default function (Component) {
    class RequireUser extends React.Component {
        componentWillMount() {
            const {user, history} = this.props;
            if ((user === null)) {
                history.push("/");
            }
        }

        componentWillUpdate(nextProps) {
            const {user} = nextProps;
            const {history} = this.props;
            if (user === null) {
                history.push("/");
            }
        }

        render() {
            return (
                <Component {...this.props}/>
            );
        }
    }

    function mapStateToProps(state) {
        return {
            user: state.user.currentSignInUser
        };
    }

    return connect(mapStateToProps)(RequireUser);
}