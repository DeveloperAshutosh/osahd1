import React from "react";
import "./App.css";
import UnauthorizedUser from "./unauthorized-user/UnauthorizedUser";
import SignIn from "./Sign-In/SignIn";
import SignUp from "./Sign-Up/SignUp";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello World</p>
        <UnauthorizedUser />
        <SignUp />
      </div>
    );
  }
}

export default App;
