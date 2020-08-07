import React from "react";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import { connect } from "react-redux";


class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h2>Home page</h2>
                <button onClick={() => {
                    console.log("button clicked");
                }}>Logout</button>
              
            </div>

        );
    }
}

function mapStateToProps(state) {
  return {
    state: state,
  };
}

export default connect(mapStateToProps)(HomePage);
