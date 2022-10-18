const UPDATE_TEXTAREA = "UPDATE_TEXTAREA";

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

export let updateTextareaAC = (data) => {
  return {
    type: UPDATE_TEXTAREA,
    data: data,
  };
};
