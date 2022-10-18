const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_TEXTAREA = "UPDATE_TEXTAREA";

let initialState = {
  last: [
    {
      id: "1",
      title: "Hello world 3",
      category: "Java",
    },
    {
      id: "2",
      title: "Hello world 4",
      category: "Rust",
    },
  ],
  favorites: [
    {
      id: "2",
      title: "Hello world 4",
      category: "Rust",
    },
    {
      id: "3",
      title: "Hello world 6",
      category: "Python",
    },
  ],
  subscribe: [
    {
      id: "3",
      title: "Hello world 6",
      category: "Python",
    },
  ],
  main: [
    {
      id: "1",
      title: "Hello world 3",
      category: "Java",
    },
    {
      id: "2",
      title: "Hello world 4",
      category: "Rust",
    },
    {
      id: "3",
      title: "Hello world 6",
      category: "Python",
    },
  ],
  default: "Input text...",
};

export const postReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  if (action.type === SEND_MESSAGE) {
    stateCopy.main = [...state.main];
    stateCopy.main.push(action.data);
  }

  if (action.type === UPDATE_TEXTAREA) {
    stateCopy.default = action.data;
  }

  return stateCopy;
};

export let sendPostAC = (data) => {
  return {
    type: SEND_MESSAGE,
    data: data,
  };
};

export let updateTextareaAC = (data) => {
  return {
    type: UPDATE_TEXTAREA,
    data: data,
  };
};
