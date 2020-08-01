/**
 * this action adds a hello message addressed to name in the redux store
 * @param {string} name a name to say hello to
 */
const addHelloWorld = (name) => {
  return {
    type: "ADD_HELLO_WORLD",
    value: name,
  };
};

export { addHelloWorld };
