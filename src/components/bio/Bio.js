import React from "react";
import { connect } from "react-redux";

class Bio extends React.Component {
  render() {
    return (
      <>
        <img src={this.props.store.currentUser.photoURL} alt="current user" />
        <h2>{this.props.store.currentUser.name}</h2>
        <p>Activities: {this.props.store.currentUser.activities}</p>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state,
  };
}

export default connect(mapStateToProps)(Bio);
