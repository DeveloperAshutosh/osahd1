import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UnauthorizedUser from "./unauthorized-user/UnauthorizedUser";
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello World</p>
        <UnauthorizedUser />
        <SignIn />
       <SignUp />
      </div>
    );
  }
}

export default App;
