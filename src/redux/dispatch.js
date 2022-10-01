import { postReducer } from "./reducers/postReducer";
import { updateFormReducer } from "./reducers/formReducer";
import store from "./redux-store";

let dispatch = (action) => {
  store.articles = postReducer(store.articles, action);
  store.defaulTitle = updateFormReducer(store.defaulTitle, action);
};

export default dispatch;
