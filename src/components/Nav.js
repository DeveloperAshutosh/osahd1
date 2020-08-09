import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setLoggedIn, setCurrentUser } from ".././actions/social-media-app";

//Nav displays the menu links on the page.

class Nav extends React.Component {
  logout() {
    this.props.dispatch(setLoggedIn(false));
    this.props.dispatch(setCurrentUser(null));
  }

  renderLogout() {
    if (this.props.store.isLoggedIn) {
      return <button onClick={() => this.logout()}> Log Out</button>;
    }
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link className="homepageLink" to="/HomePage">Home Page</Link>
            <Link clasName="newsfeedLink" to="/NewsFeed">News Feed</Link>
            <Link className="searchpageLink" to="/Search">Search Page</Link>
          </li>
        </ul>
        {this.renderLogout()}
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    store: state,
  };
}
export default connect(mapStateToProps)(Nav);
