import React from "react";
import "./App.css";
import UnauthorizedUser from "./unauthorized-user/UnauthorizedUser";
import User from './User';
import Content from './Content';
class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello World</p>
        <UnauthorizedUser />

     <User />
    <Content />
      </div>
    );
  }
}

export default App;
