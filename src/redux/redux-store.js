import { combineReducers, legacy_createStore as createStore } from "redux";
import { postReducer } from "./reducers/postReducer";
import { updateFormReducer } from "./reducers/formReducer";


let reducers = combineReducers({
  articles: postReducer,
  default: updateFormReducer,
});


let store = createStore(reducers);

export default store;
