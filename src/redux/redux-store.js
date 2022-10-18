import { combineReducers, legacy_createStore as createStore } from "redux";
import { postReducer } from "./reducers/postReducer";
import { usersReducer } from "./reducers/usersReduser";

let reducers = combineReducers({
  articles: postReducer,
  users: usersReducer,
});

let store = createStore(reducers);

export default store;
