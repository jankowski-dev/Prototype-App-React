import { combineReducers, legacy_createStore as createStore } from "redux";
import { postReducer } from "./reducers/postReducer";
import { updateFormReducer } from "./reducers/formReducer";

let rerender = () => {
  return true;
};

let reducers = combineReducers({
  articles: postReducer,
  defaultTitle: updateFormReducer,
});

let store = createStore(reducers);

store.dispatch = (action) => {
  store.articles = postReducer(store.articles, action);
  store.defaultTitle = updateFormReducer(store.defaultTitle, action);
  rerender();
};

store.subscribe = (observer) => {
  rerender = observer;
};

export default store;
