import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import tabReducer from "./tabReducer";

export default combineReducers({
    productsReducer,
    tabReducer
})