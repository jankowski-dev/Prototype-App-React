const SEND_MESSAGE = "SEND_MESSAGE";

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
};

export const postReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  stateCopy.main = [...state.main];

  if (action.type === SEND_MESSAGE) {
    stateCopy.main.push(action.data);
    return stateCopy;
  }
  return state;
};

export let sendPostAC = (data) => {
  return {
    type: SEND_MESSAGE,
    data: data,
  };
};
