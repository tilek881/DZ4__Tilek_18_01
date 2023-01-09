import {types} from "../types";

const initialState = {
    user: {}
}

export default function oneUserReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_USER:
            return {...state,user: action.payload}
        default: return state
    }
}