import { postReducer, updateFormReducer } from "./reducer";
import store from "./store";

let dispatch = (action) => {
  store.state.articles.main = postReducer(store.state.articles.main, action);
  store.state.defaultTitle = updateFormReducer(store.state.defaultTitle, action);
};

export default dispatch;
