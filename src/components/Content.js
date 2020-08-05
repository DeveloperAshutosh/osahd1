import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";
import { updatePosts } from ".././actions/social-media-app";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      title: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://jsonstorage.net/api/items/f2c563c1-bff6-469b-a954-0dab52edc4c3"
    )
      .then((posts) => {
        return posts.json();
      })
      .then((data) => {
        let title = data.posts;
        this.setState({ title: title });
        this.props.dispatch(updatePosts(title));
        // use a put request to send updated list to our json stroage api
      });
  }
  render() {
    return (
      <>
        <button
          onClick={() => {
            console.log("button clicked");
          }}
        >
          Refresh
        </button>

        <div className="container1">
          {this.props.someRandomName.posts.map((pic) => {
            return <Post postData={pic} />;
          })}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    someRandomName: state,
  };
}
export default connect(mapStateToProps)(Content);
