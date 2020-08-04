import React from "react";
import "./App.css";
import UnauthorizedUser from "./unauthorized-user/UnauthorizedUser";
import User from './User';
import Post from './Post';
class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello World</p>
        <UnauthorizedUser />

     <User />
     <Post />
      </div>
    );
  }
}

export default App;
