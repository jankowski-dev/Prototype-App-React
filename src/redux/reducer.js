import { rerender } from "..";
import { SEND_MESSAGE, UPDATE_TEXTAREA } from "./actionCreaters";

export const postReducer = (state, action) => {
  if (action.type === SEND_MESSAGE) {
    state.push(action.data);
  }
  rerender();
  return state;
};

export const updateFormReducer = (state, action) => {
  if (action.type === UPDATE_TEXTAREA) {
    state = action.data;
  }
  rerender();
  return state;
};
