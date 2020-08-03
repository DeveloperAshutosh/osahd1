/**
 * set the value of isLoggedIn (to true or false)
 * @param {boolean} value
 */
const setLoggedIn = (value) => {
  return {
    type: "SET_IS_LOGGED_IN",
    value: value,
  };
};

/**
 * store the current user in redux
 * @param {object} user a user object with id, username.. etc
 */
const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    value: user,
  };
};

/**
 * store the list of posts in redux
 * @param {array} listOfPosts a list of posts
 */
const updatePosts = (listOfPosts) => {
  return {
    type: "UPDATE_POSTS",
    value: listOfPosts,
  };
};

/**
 * store the list of users in redux
 * @param {array} listOfUsers a list of users
 */
const updateUsers = (listOfUsers) => {
  return {
    type: "UPDATE_USERS",
    value: listOfUsers,
  };
};

export { updatePosts, updateUsers, setLoggedIn, setCurrentUser };
