import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUsers } from "../../actions/social-media-app";
import { v4 as uuid } from "uuid";
import "./Signup.css";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  registrationErrors: "",
  activities: [],
  gender: "",
  age: "",
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      id: uuid(),
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      activities: this.state.activities,
      gender: this.state.gender,
      age: this.state.age,
      photoURL: this.state.photoURL
        ? this.state.photoURL
        : "https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg",
    };
    const listOfUsers = this.state.users;
    let userExists = false;
    for (let newuser of this.state.users) {
      if (newuser.email === this.state.email) {
        userExists = true;
      }
    }
    if (userExists) {
      document.querySelector("#emailWarning").innerHTML =
        "This email already exists";
    } else if (
      this.state.email.trim() === "" ||
      this.state.name.trim() === "" ||
      this.state.password.trim() === "" ||
      this.state.password !== this.state.passwordConfirmation ||
      this.state.gender.trim() === ""
    ) {


      if (this.state.name.trim() === "") {
        document.querySelector("#nameWarning").innerHTML =
          "Name cannot be blank";
      } else {
        document.querySelector("#nameWarning").innerHTML = "";
      }

      if (this.state.email.trim() === ""){
        document.querySelector("#emailWarning").innerHTML = "Email cannot be blank";
      }
      else {
        document.querySelector("#nameWarning").innerHTML = "";
      }
      if (this.state.password.trim() === "") {
        document.querySelector("#passwordWarning").innerHTML =
          "password cannot be blank";
      } else {
        document.querySelector("#passwordWarning").innerHTML = "";
      }
      if (this.state.password.trim() !== this.state.passwordConfirmation) {
        document.querySelector("#passwordConfirmationWarning").innerHTML =
          "Password does not match";
      } else {
        document.querySelector("#passwordConfirmationWarning").innerHTML = "";
      }
    } else {
      document.querySelector("#emailWarning").innerHTML = "";

      document.querySelector("#successful").innerHTML = "Account has been created successfully. Please click Sign In to continue.";

      listOfUsers.push(user);
      this.setState(initialState);
    }

    axios
      .put(
        "https://jsonstorage.net/api/items/4d56c6a1-9bd8-4795-b714-8b6e815d2edd",
        { users: listOfUsers }
      )

      .then((response) => {
        
        this.props.dispatch(updateUsers(listOfUsers));
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.getUsers()}
          <div id="nameWarning"></div>
          <label htmlFor="name">Enter Full Name: </label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <div id="emailWarning"></div>
          <label htmlFor="email">Enter Email: </label>
          <input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <div id="passwordWarning"></div>
          <label htmlFor="password">Enter Password: </label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <div id="passwordConfirmationWarning"></div>
          <label htmlFor="passwordConfirmation">Confirm Password: </label>
          <input
            type="password"
            id="passwordConfirmation"
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
          />

          <div id="interestWarning"></div>
          <label htmlFor="activities">Enter Your Interests: </label>
          <input
            type="text"
            id="activities"
            value={this.state.activities}
            onChange={this.handleChange}
          />

          <div id="ageWarning"></div>
          <label htmlFor="age">Enter Your Age: </label>
          <input
            type="date"
            id="age"
            value={this.state.age}
            onChange={this.handleChange}
          />

          <div id="genderWarning"></div>
          <label htmlFor="gender">Enter Your Gender: </label>
          <select
            id="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          >
            <option></option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <br />
          <button type="submit" onSubmit={this.handleSubmit}>
            {" "}
            SIGN UP
          </button>
          <div id="successful" ></div>
          <Link to="../sign-in/SignIn">SIGN IN</Link>
          <p>
            {" "}
            Share...Express...Connect...Your world closer together...{" "}
          </p>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state,
  };
}

export default connect(mapStateToProps)(SignUp);
