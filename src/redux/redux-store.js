import { combineReducers, legacy_createStore as createStore } from "redux";
import { postReducer, updateFormReducer } from "./reducer";

let reducers = combineReducers({
    mainPost: postReducer,
    defaultForm: updateFormReducer,
});

let store = createStore(reducers);

export default store;
