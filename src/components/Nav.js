import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; 

import { setLoggedIn } from ".././actions/social-media-app";

//Nav displays the menu links on the page.

class Nav extends React.Component {
  logout (){
    this.props.dispatch(setLoggedIn(true));
  }

  
  render() {
    return (
      <nav>
        <ul>
          <li>
          <Link to="/HomePage">Home Page</Link>
            <Link to="/NewsFeed">News Feed</Link>
            <Link to="/Search">Search Page</Link>
           </li>
           <button onClick = {this.logout} > Log Out</button>
          
        </ul>
      </nav>
    );
  }
}

export default Nav;
