import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; // this will enable connecting the redux store
import {
  setCurrentUser,
  setLoggedIn,
  updateUsers,
} from "../../actions/social-media-app"; // actions required to dispatch redux
<<<<<<< HEAD
import "./Signin.css";
=======
import "./SignIn.css";
>>>>>>> e9275ad6f61dadf551adb6580e24f5351fdf89e2

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
<<<<<<< HEAD
            // get the Newsfeed links and redirect the user
            // redirect the user to newsfeed
            try {
              this.props.onNavigate.push("/Newsfeed");
            } catch (error) {
              this.props.history.push("/Newsfeed");
            }
=======

            // redirect the user to newsfeed
            try {
              this.props.onNavigate.push("/NewsFeed");
            } catch (error) {
              this.props.history.push("/NewsFeed");
            }

>>>>>>> e9275ad6f61dadf551adb6580e24f5351fdf89e2
          }
        }
      }); // end of async call
  }; // end of handle submit function
  navigateToSignUp() {
    console.log("whts up");
    try {
      this.props.onNavigate.push("/sign-up/SignUp");
    } catch (error) {
      this.props.history.push("/sign-up/SignUp");
    }
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="images/Logo.png" alt="logo" />
        </div>
        <h3>Welcome</h3>
        <p className="#">
          {" "}
          Share...Express...Connect...Your World Closer Together...{" "}
        </p>
<<<<<<< HEAD
        <section className="buttonInput">
          <Link className="signup" to="./sign-up/SignUp">
            SIGN UP
          </Link>
          <form onSubmit={this.handleSubmit}>
            <div id="warning" onSubmit={this.handleSubmit}></div>
            <div className="blueSolid">
=======

        <section class="buttonInput">
          <button
            onClick={() => {
              this.navigateToSignUp();
            }}
          >
            SIGN UP{" "}
          </button>
          <form onSubmit={this.handleSubmit}>
            <div id="warning" onSubmit={this.handleSubmit}></div>
            <div class="blueSolid">

>>>>>>> e9275ad6f61dadf551adb6580e24f5351fdf89e2
              <input
                class="input1"
                type="email"
                id="email"
                placeholder="Enter Email:"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <input
<<<<<<< HEAD
=======

>>>>>>> e9275ad6f61dadf551adb6580e24f5351fdf89e2
                className="input2"
                type="password"
                id="password"
                placeholder="Enter Password:"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" onSubmit={this.handleSubmit}>
              {" "}
              SIGN IN{" "}
            </button>
          </form>
        </section>
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
