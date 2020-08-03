import React from "react";
import "./App.css";
import {connect} from 'react-redux';

class NewsFeed extends React.Component {
  render() {
    return (
      <div>
        <h2>News Feed</h2> 
        <ul>
           User's News Feed 
        </ul>       
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    stote: state,
  };
}


export default connect(mapStateToProps)(NewsFeed);