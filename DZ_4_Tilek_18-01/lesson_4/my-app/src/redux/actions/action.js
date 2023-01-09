
import {types} from "../types";
export function changeTitleAction () {
    return{
        type: types.CHANGE_TITLE
    }
}

export function asyncFunctionAction() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(changeTitleAction())
        }, 2000)
    }
}

function getUserAction(users) {
    return {
        type: types.GET_USERS,
        payload: users
    }
}
function getOneUserAction (user) {
    return {
        type: types.GET_USER,
        payload: user
    }
}
export function fetchUsersAction () {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUserAction(data))
    }
}
export function fetchUsersOneAction (id) {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        dispatch(getOneUserAction(data))
    }
}