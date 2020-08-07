import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";
import { updatePosts } from ".././actions/social-media-app";
import axios from "axios";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state={
      title: []
     
    };
  }
  
  componentDidMount() {
    //fetching data from the api
    fetch(
      "https://jsonstorage.net/api/items/f2c563c1-bff6-469b-a954-0dab52edc4c3"
    )
    //storing posts in json
      .then((posts) => {
        return posts.json();
      })
      .then((data) => {
        //setting the state of the posts and dispatching it to store.
        let title=data.posts;
        this.setState({ title: title });
        this.props.dispatch(updatePosts(title));
      });
   
    }

  render() {
    return (
      <>
        <button
        //here refresh button will refresh the post lists with  latest updated list.
          onClick={() => {
            console.log("button clicked");
       
          }}>

          Refresh
        </button>
        
        <div className="container1">
          {this.props.someRandomName.posts.map((pic) => {
            return <Post key={pic.id} postData={pic} />;
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
