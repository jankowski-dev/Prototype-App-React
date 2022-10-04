import { UPDATE_TEXTAREA } from "./../actionCreaters";

let initialState = {
  defaultTitle: "First text",
};

export const updateFormReducer = (state = initialState, action) => {
  if (action.type === UPDATE_TEXTAREA) {
    state.defaultTitle = action.data;
  }
  return state;
};
