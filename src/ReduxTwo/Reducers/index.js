import Reducers from "./Reducers";
import { combineReducers } from "redux";

const mainReducer = combineReducers({
    auth: Reducers
})

export default mainReducer;