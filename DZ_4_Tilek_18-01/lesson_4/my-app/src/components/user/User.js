import React from 'react';
import {useDispatch} from "react-redux";
import { fetchUsersOneAction} from "../../redux/actions/action";


function User({userInfo}) {
    const dispatch = useDispatch()

    const getOneUser = (event) => {
        dispatch(fetchUsersOneAction(event.target.value))
    }
    return (
        <div>

            <ul>
                <li>name: {userInfo.name}</li>
                <li>email: {userInfo.email}</li>
                <li><button value={userInfo.id} onClick={getOneUser}>more info</button></li>
            </ul>

        </div>
    );
}

export default User;