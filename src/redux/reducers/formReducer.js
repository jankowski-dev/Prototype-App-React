import { UPDATE_TEXTAREA } from "./../actionCreaters";

let initialState = {
  defaultTitle: "First text",
};

export const updateFormReducer = (state = initialState, action) => {
  debugger;
  if (action.type === UPDATE_TEXTAREA) {
    let stateCopy = { ...state };
    stateCopy.defaultTitle = action.data;
    return stateCopy;
  }
  return state;
};
