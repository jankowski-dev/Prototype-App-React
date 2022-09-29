import { rerender } from "..";

export const postReducer = (state, action) => {
  if (action.type === "SEND-MESSAGE") {
    state.main.push(action.data);
  }
  if (action.type === "UPDATE-TEXTAREA") {
    state.defaultTitle = action.data;
  }
  rerender();
  return state;
};
