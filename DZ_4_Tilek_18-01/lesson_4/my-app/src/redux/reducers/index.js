import {combineReducers} from "redux";
import titleReducer from "./titleReducer";
import usersReducer from "./usersReducer";
import oneUserReducer from "./OneUserReducer";

export const rootReducer = combineReducers({
    titleReducer,
    usersReducer,
    oneUserReducer
})