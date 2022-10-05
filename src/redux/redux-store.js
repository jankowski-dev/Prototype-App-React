import { combineReducers, legacy_createStore as createStore } from "redux";
import { postReducer } from "./reducers/postReducer";
import { updateFormReducer } from "./reducers/formReducer";

let reducers = combineReducers({
  articles: postReducer,
  defaultTitle: updateFormReducer,
});

let store = createStore(reducers);

// store.dispatch = (action) => {
//   // debugger;
//   store.articles = postReducer(store.articles, action);
//   store.defaultTitle = updateFormReducer(store.defaultTitle, action);
// };

window.state = store.getState();

export default store;
