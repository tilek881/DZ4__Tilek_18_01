import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../../redux/actions/action";
import User from "../../components/user/User";

function UserPage(props) {
    const dispatch = useDispatch()

    const {users} = useSelector(state => state.usersReducer)

    const getUser = () => {
        dispatch(fetchUsersAction())
    }
    const {user} = useSelector(state => state.oneUserReducer)
    return (
        <div>
            <h1>
                <ul>
                    <li>username: {user.username}</li>
                    <li>email: {user.email}</li>
                    <li>street: {user.address?.street}</li>
                    <li>cod: {user.address?.zipcode}</li>
                </ul>
            </h1>
            <button onClick={getUser}>get users</button>
            {users.map(user => <User userInfo={user}/>)}
        </div>
    );
}

export default UserPage;