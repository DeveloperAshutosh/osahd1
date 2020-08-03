const initialState = {
  isLoggedIn: false,
  currentUser: null,
  posts: [],
  users: [],
};

/**
 *
 * @param {Object} state an object representing the default value of our redux store
 * @param {Object} action an object with information required to update the state
 */
const socialMediaAppReducer = (state = initialState, action) => {
  // create a variable to hold copies of state
  // this will allow us to return a new, updated state
  // without manually changing the old state
  let temporaryState = { ...state };

  switch (action.type) {
    // set the value of isLoggedIn
    case "SET_IS_LOGGED_IN":
      temporaryState.isLoggedIn = action.value;
      return temporaryState;

    // set the current user
    case "SET_CURRENT_USER":
      temporaryState.currentUser = action.value;
      return temporaryState;

    // update the list of posts in redux
    case "UPDATE_POSTS":
      temporaryState.posts = action.value;
      return temporaryState;

    // update the list of users in redux
    case "UPDATE_USERS":
      temporaryState.users = action.value;
      return temporaryState;

    // handle values that do not match any defined case
    default:
      break;
  }
};

export default socialMediaAppReducer;
