import React from "react";
import "./App.css";
import UnauthorizedUser from "./unauthorized-user/UnauthorizedUser";
import Content from './Content';
import User from './User';
import Post from './Post';
class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello World</p>
        <UnauthorizedUser />
        <Content />
     <User />
     <Post />
      </div>
    );
  }
}

export default App;
