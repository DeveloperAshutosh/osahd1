import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import socialMediaAppReducer from "./reducers/social-media-app";
import { setLoggedIn } from "./actions/social-media-app";

// create a new redux store
const socialMediaAppStore = createStore(socialMediaAppReducer);

// log the updated store to the console whenever a change occurs
socialMediaAppStore.subscribe(() => {
  console.log(socialMediaAppStore.getState());
});

// set the logged in value to false
socialMediaAppStore.dispatch(setLoggedIn(false));

ReactDOM.render(
  <Provider store={socialMediaAppStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
