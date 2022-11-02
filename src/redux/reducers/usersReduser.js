const SET_USERS = "SET_USERS";
const RUN_PRELOADER = "RUN_PRELOADER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNTS = "SET_TOTAL_COUNTS";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  allUsers: [],
  bannedUsers: [],
  favoritesUsers: [],
  preloader: false,
  totalCounts: 0,
  pageSize: 100,
  currentPage: 1,
  userProfile: {},
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

  if (action.type === SET_USER_PROFILE) {
    stateCopy.userProfile = action.data;
  }

  return stateCopy;
};

export let setUsers = (data) => {
  return {
    type: SET_USERS,
    data: data,
  };
};

export let preloader = (data) => {
  return {
    type: RUN_PRELOADER,
    data: data,
  };
};

export let setCurrentPage = (data) => {
  return {
    type: SET_CURRENT_PAGE,
    data: data,
  };
};

export let setTotalCounts = (data) => {
  return {
    type: SET_TOTAL_COUNTS,
    data: data,
  };
};

export let setUserProfile = (data) => {
  return {
    type: SET_USER_PROFILE,
    data: data,
  }
}
