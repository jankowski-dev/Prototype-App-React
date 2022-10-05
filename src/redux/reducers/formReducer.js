import { UPDATE_TEXTAREA } from "./../actionCreaters";

let initialState = {
  defaultTitle: "First text",
};

export const updateFormReducer = (state = initialState, action) => {
  
  let stateCopy = { ...state };
  if (action.type === UPDATE_TEXTAREA) {
    stateCopy.defaultTitle = action.data;
    return stateCopy;
  }
  return state;
};
