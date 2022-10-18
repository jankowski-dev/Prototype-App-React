const SET_USERS = "SET_USERS";

let initialState = { allUsers: [], bannedUsers: [], favoritesUsers: [] };

export const usersReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  if (action.type === SET_USERS) {
    stateCopy.allUsers = action.data;
    return stateCopy;
  }

  return state;
};

export let setUsersAC = (data) => {
  return {
    type: SET_USERS,
    data: data,
  };
};