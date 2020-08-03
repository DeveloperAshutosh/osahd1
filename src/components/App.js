import React from "react";
import "./App.css";
import UnauthorizedUser from "./unauthorized-user/UnauthorizedUser";
import Content from './Content';
import User from './User';
class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello World</p>
        <UnauthorizedUser />
        <Content />
     <User />
      </div>
    );
  }
}

export default App;
