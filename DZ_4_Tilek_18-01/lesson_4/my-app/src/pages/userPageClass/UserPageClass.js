import React, {Component} from 'react';
import {fetchUsersAction} from "../../redux/actions/action";
import {connect} from "react-redux";
import User from "../../components/user/User";

class UserPageClass extends Component {
    getUsers = () => {
        this.props.fetchUsersAction()
    }
    render() {
        return (
            <div>
                <button onClick={this.getUsers}>get form class</button>
                {this.props.users.map(user => <User userInfo={user}/>)}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        users: state.usersReducer.users
    }
}

const mapDispatchToProps = {
    fetchUsersAction
}

export default connect(mapStateToProps, mapDispatchToProps) (UserPageClass);