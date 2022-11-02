import { combineReducers, legacy_createStore as createStore } from "redux";
import { articlesReducer } from "./reducers/articlesReducer";
import { usersReducer } from "./reducers/usersReduser";

let reducers = combineReducers({
  articles: articlesReducer,
  users: usersReducer,
});

let store = createStore(reducers);

export default store;
