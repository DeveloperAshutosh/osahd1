import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePosts } from ".././actions/social-media-app";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h3>{this.props.postData.title}</h3>
        <p>{this.props.postData.body}</p>

        <button
          onClick={() => {
            console.log("button clicked");

            let updatedPostList = this.props.someRandomName.posts.filter(
              (post) => {
                return post.id !== this.props.postData.id;
              }
            );

            this.props.dispatch(updatePosts(updatedPostList));
          }}
        >
          {" "}
          Delete
        </button>

        <button
          onClick={() => {
            console.log("button clicked");
          }}
        >
          Translate Button
        </button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    someRandomName: state,
  };
}

export default connect(mapStateToProps)(Post);
