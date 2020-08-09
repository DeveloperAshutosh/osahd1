import React from "react";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <img className="photoUser"
          src={this.props.userData.photoURL}
          alt={`showing ${this.props.userData.name}`}
        />
        <h3>{this.props.userData.name}</h3>
        <ul>
          {this.props.userData.activities.map((activity) => {
            return <li key={activity}>{activity}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default UserProfile;
