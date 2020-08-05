import React from "react";
import "./App.css";
import {connect} from 'react-redux';
import addNewsFeed from '../actions/NewsFeedActions';
import Content from "./Content";
import UnauthorizedUser from "./unauthorized-user/UnauthorizedUser"


class NewsFeed extends React.Component {

  constructor ( props )
  {
    super( props );

    this.state = {
      newsFeed: "", // Keep track of our new post's value.
      newsFeedDesc: ""
    };
  }


  // Add a new post title
  addNewsFeed = ( event ) =>
  {
    //event.preventDefault(); // Stop the page from reloading.
 

    // Dispatch an action; this one we set to require some "newsFeed" text.
    this.props.dispatch(addNewsFeed(this.state.newsFeed));

    //clear the field for new input.
   
    this.updateItem('newsFeed',''); //or use preformatted method.
  }

   // Add a new post description
   addNewsFeedDesc = ( event ) =>
   {
     //event.preventDefault(); // Stop the page from reloading.
  
 
     // Dispatch an action; this one we set to require some "newsFeed" text.
     this.props.dispatch(addNewsFeed(this.state.newsFeed));
 
     //clear the field for new input.
    
     this.updateItem('newsFeedDesc',''); //or use preformatted method.
   }

  updateItem ( key, value )
  {
    // We never re-assign the contents of this.state.
    // this.state is ONLY USED FOR READING VALUES, NOT writing.
    // When we need to update anything in state, we need to use this.setState()
    // this.setState() triggers the render() method, so we can see updated state info in our presentation.
    this.setState( {[key]: value} );
  }

  addPost=(event)=> {
    event.preventDefault(); // Stop the page from reloading.

    this.props.dispatch(addNewsFeed(`${this.state.newsFeed} ${this.state.newsFeedDesc}`));

    console.log(this.state.newsFeed);
    console.log(this.state.newsFeedDesc);

  }

  render() {
    return (
      <>
       <button onClick={() => {
          console.log("button clicked");
        }}>Logout</button>

        <h1>News Feed</h1> 
        <form>
                <input
                type="text"
                name="newsFeed"
                id="newsFeed"
                required
                value={this.state.newsFeed}
                onChange={event => this.updateItem( 'newsFeed', event.target.value )} placeholder="Title..." />
                <br /><br />
              <textarea required placeholder="What's on your mind..." rows="5" cols="25" value={this.state.newsFeedDesc}
              onChange={event => this.updateItem( 'newsFeedDesc', event.target.value )} />
               
               <br /><br />
            <input type="submit" value="Post Feed" onClick={this.addPost}/>
          </form>  
          <Content />
          <UnauthorizedUser/>
      </>
    );
    
  }
}

function mapStateToProps(state) {
  return {
    store: state,
  };
}


export default connect (mapStateToProps)(NewsFeed) ;