import reducerAction from "./ReducerAction"
import { combineReducers } from "redux";
 const combineReducer = combineReducers ( {
    reducerAction: reducerAction
})
export default combineReducer;