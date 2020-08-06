import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePosts } from ".././actions/social-media-app";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.postData.title,
      body: this.props.postData.body,
      source: "en",
      target: "fr",
    };
  }

  translate() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://translate.googleapis.com/translate_a/single?client=gtx&sl=${this.state.source}&tl=${this.state.target}&dt=t&q=${this.props.postData.body}`
      )
      .then((response) => {
        return response.data[0];
      })
      .then((translatedArray) => {
        let text = "";
        for (let translation of translatedArray) {
          text = text + translation[0];
        }

        this.setState({ body: text });
      });

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://translate.googleapis.com/translate_a/single?client=gtx&sl=${this.state.source}&tl=${this.state.target}&dt=t&q=${this.props.postData.title}`
      )
      .then((response) => {
        return response.data[0];
      })
      .then((translatedArray) => {
        let text = "";
        for (let translation of translatedArray) {
          text = text + translation[0];
        }

        this.setState({ title: text });
      });

    this.setState({
      source: this.state.source === "en" ? "fr" : "en",
      target: this.state.target === "en" ? "fr" : "en",
    });
  }

  render() {
    return (
      <>
        <h3>{this.state.title}</h3>
        <p>{this.state.body}</p>

        <button
          onClick={() => {
            console.log("button clicked");

            let updatedPostList = this.props.someRandomName.posts.filter(
              (post) => {
                return post.id !== this.props.postData.id;
              }
            );

            this.props.dispatch(updatePosts(updatedPostList));
            // use a put request to send updated list to our json stroage api after deleting the post.

            axios.put(
              "https://jsonstorage.net/api/items/f2c563c1-bff6-469b-a954-0dab52edc4c3",
              { posts: updatedPostList }
            );
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            this.translate();
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
