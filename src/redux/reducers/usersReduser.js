const SET_USERS = "SET_USERS";
const RUN_PRELOADER = "RUN_PRELOADER";

let initialState = {
  allUsers: [],
  bannedUsers: [],
  favoritesUsers: [],
  preloader: false,
};

export const usersReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  if (action.type === SET_USERS) {
    stateCopy.allUsers = action.data;
    return stateCopy;
  }

  if (action.type === RUN_PRELOADER) {
    stateCopy.preloader = action.data;
    return stateCopy;
  }

  return stateCopy;
};

export let setUsersAC = (data) => {
  return {
    type: SET_USERS,
    data: data,
  };
};

export let preloaderAC = (data) => {
  return {
    type: RUN_PRELOADER,
    data: data,
  };
};
