import React from "react";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import { connect } from "react-redux";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <h2>Home page</h2>
        <button
          onClick={() => {
            console.log("button clicked");
          }}
        >
          Logout
        </button>

        <SignIn />
        <SignUp />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state,
  };
}

export default connect(mapStateToProps)(HomePage);
