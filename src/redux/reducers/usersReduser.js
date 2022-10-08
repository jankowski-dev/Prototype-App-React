import { UPDATE_TEXTAREA } from "../actionCreaters";
import axios from 'axios';


let initialState = {
  users: [
    { id: 1, name: "Peter", status: "I am Ok", },
    { id: 2, name: "John", status: "I am normal", },
    { id: 3, name: "Lesly", status: "I am hungry", },
    { id: 4, name: "Joahna", status: "I am later", },
    { id: 5, name: "Stive", status: "I am fuck off yourself", },
  ],
};

export const usersReducer = (state = initialState, action) => {
  debugger;
  let stateCopy = { ...state };
  if (action.type === UPDATE_TEXTAREA) {
    stateCopy.defaultTitle = action.data;
    return stateCopy;
  }
  return state;
};



