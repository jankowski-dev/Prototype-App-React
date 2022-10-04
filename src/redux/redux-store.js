import { combineReducers, legacy_createStore as createStore } from "redux";
import { postReducer } from "./reducers/postReducer";
import { updateFormReducer } from "./reducers/formReducer";

let reducers = combineReducers({
  articles: postReducer,
  defaultTitle: updateFormReducer,
});

let store = createStore(reducers);

store.dispatch = (action) => {
  store.articles = postReducer(store.getState().articles, action);
  store.defaultTitle = updateFormReducer(store.getState().defaultTitle, action);
};

window.store = store;

export default store;
