import React from "react";
import "./UnauthorizedUser.css";
import { connect } from "react-redux";

class UnauthorizedUser extends React.Component {
  render() {
    return (
      <>
        <p>Posts are only visible to logged in users.</p>
        <a href="#">Sign in or Sign Up </a>
      </>
    );
  }
}

/**
 * this function makes a redux store available in a component's props under store
 * access the store with "this.props.store"
 * @param {redux store} state
 */
function mapStateToProps(state) {
  return {
    store: state,
  };
}

export default connect(mapStateToProps)(UnauthorizedUser);
