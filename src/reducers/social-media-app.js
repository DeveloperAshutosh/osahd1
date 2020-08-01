const initialState = { helloWorld: "Hello Stranger" };

/**
 *
 * @param {Object} state an object representing the default value of our redux store
 * @param {Object} action an oobject with information on how we want to update the state
 */
const socialMediaAppReducer = (state = initialState, action) => {
  // create a variable to hold copies of state
  // this will allow us to return new, updated states
  // without manually changing the old state
  let temporaryState = { ...state };

  // handle ADD_HELLO_WORLD actions
  switch (action.type) {
    case "ADD_HELLO_WORLD":
      temporaryState.helloWorld = "Hello " + action.value;
      return temporaryState;

    default:
      break;
  }
};

export default socialMediaAppReducer;
