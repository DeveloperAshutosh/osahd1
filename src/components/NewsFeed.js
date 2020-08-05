import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import Content from "./Content";

class NewsFeed extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          console.log("button clicked");
        }}>Logout</button>
        <h2>News Feed</h2>
        <ul>
          User's News Feed
        </ul>
        <Content />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    stote: state,
  };
}


export default connect(mapStateToProps)(NewsFeed);