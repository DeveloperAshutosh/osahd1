import React from "react";
import "./UnauthorizedUser.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class UnauthorizedUser extends React.Component {
 
  render() {
    return (
      <>
      <p className = "logo"></p>
        <p>Posts are only visible to logged in users.</p>
        
        <nav>
        <ul>
          <li>
          <Link to="./Sign-In/SignIn">Sign In</Link>
          </li>
          <li>
            <Link to="./sign-up/SignUp">Sign Up</Link>
          </li>
            
         
        </ul>
      </nav>
       
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
