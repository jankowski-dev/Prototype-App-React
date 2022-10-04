import { SEND_MESSAGE } from "./../actionCreaters";

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
  if (action.type === SEND_MESSAGE) {
    let stateCopy = { ...state };
    stateCopy.main = { ...state.main };
    stateCopy.main.push(action.data);
  }
  return state;
};
