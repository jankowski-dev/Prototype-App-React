import { postReducer } from "./reducer";
import store from "./store";

let dispatch = (action) => {
  store.state = postReducer(store.state, action);
};

export default dispatch;
