import { combineReducers, legacy_createStore as createStore } from "redux";
import { postReducer } from "./reducers/postReducer";
import { updateFormReducer } from "./reducers/formReducer";
import { usersReducer } from "./reducers/usersReduser";

let reducers = combineReducers({
  articles: postReducer,
  default: updateFormReducer,
  users: usersReducer,
});

let store = createStore(reducers);

export default store;
