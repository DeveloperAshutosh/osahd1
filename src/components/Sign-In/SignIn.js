import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; // this will enable connecting the redux store
import {
  setCurrentUser,
  setLoggedIn,
  updateUsers,
} from "../../actions/social-media-app"; // actions required to dispatch redux
import "./Signin.css";

const initialState = {
  email: "",
  password: "",
  warning: "",
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // get all existing users from api & store in state
  getUsers() {
    axios
      .get(
        "https://jsonstorage.net/api/items/4d56c6a1-9bd8-4795-b714-8b6e815d2edd"
      )
      .then((response) => {
        this.setState(response.data);
      });
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(
        "https://jsonstorage.net/api/items/4d56c6a1-9bd8-4795-b714-8b6e815d2edd"
      )
      .then((response) => {
        return response.data.users;
      })
      .then((allUsers) => {
        let userExists = false;
        let matchedUser;

        // prevent sign in attempts with empty fields
        if (
          this.state.password.trim() === "" ||
          this.state.email.trim() === ""
        ) {
          document.querySelector("#warning").innerHTML =
            "Email and Password must be entered";
        }
        // if input fields have values
        else {
          // loop through all existing users and check for a match
          for (let user of allUsers) {
            if (user.email === this.state.email) {
              if (user.password === this.state.password) {
                userExists = true;
                // if a sign in details are valid, store the matched user
                matchedUser = user;
              }
            }
          }
          // no match for sign in info
          if (!userExists) {
            // display an error if no match was found
            document.querySelector("#warning").innerHTML =
              "invalid sign in credentials";
          }
          // if login details were valid
          else {
            // store current user
            this.props.dispatch(setCurrentUser(matchedUser));
            // set logged in state to true
            this.props.dispatch(setLoggedIn(true));
            // store the existing users in redux
            this.props.dispatch(updateUsers(allUsers));
            // get the Newsfeed links and redirect the user
            let navLinks = document.querySelectorAll("a");
            navLinks[1].click(); // the second link should be the newsfeed
          }
        }
      }); // end of async call
  }; // end of handle submit function
  render() {
    return (
      <div>
       <Link to="./sign-up/SignUp">   Sign Up</Link>
        <form onSubmit={this.handleSubmit}>
          <h3>Sign In</h3>
          <label htmlFor="email">Enter email</label>
          <div id="warning" onSubmit={this.handleSubmit}></div>
          <input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Enter password</label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit" onSubmit={this.handleSubmit}>
            {" "}
            Sign In{" "}
          </button>
          
          <p className="logo"></p>
          <p className="#">
            {" "}
            Share... Express...Connect...Your world closer together{" "}
          </p>
        </form>
      </div>
    );
  }
}

// use the connect method to connect this component's props to the redux store
// keep redux store values in this.state.store
function mapStateToProps(state) {
  return {
    store: state,
  };
}
export default connect(mapStateToProps)(SignIn);
