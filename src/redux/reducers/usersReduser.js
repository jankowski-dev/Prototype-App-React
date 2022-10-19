const SET_USERS = "SET_USERS";
const RUN_PRELOADER = "RUN_PRELOADER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNTS = "SET_TOTAL_COUNTS";

let initialState = {
  allUsers: [],
  bannedUsers: [],
  favoritesUsers: [],
  preloader: false,
  totalCounts: 0,
  pageSize: 100,
  currentPage: 1,
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

  if (action.type === SET_CURRENT_PAGE) {
    stateCopy.currentPage = action.data;
    return stateCopy;
  }

  if (action.type === SET_TOTAL_COUNTS) {
    stateCopy.totalCounts = action.data;
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

export let setCurrentPageAC = (data) => {
  return {
    type: SET_CURRENT_PAGE,
    data: data,
  };
};

export let setTotalCountsAC = (data) => {
  return {
    type: SET_TOTAL_COUNTS,
    data: data,
  };
};
