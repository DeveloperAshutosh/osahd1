import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Nav.css";

import { setLoggedIn, setCurrentUser } from ".././actions/social-media-app";

//Nav displays the menu links on the page.

class Nav extends React.Component {
  logout() {
    this.props.dispatch(setLoggedIn(false));
    this.props.dispatch(setCurrentUser(null));
  }

  renderLogout() {
    if (this.props.store.isLoggedIn) {
      return <button className="logOutButton" onClick={() => this.logout()}> Log Out</button>;
    }
  }

  render() {
    return (
      <nav className="navBar">
        <div>
        <ul>
          <li>
            <Link  to="/HomePage">Home Page</Link>
            </li>
            <li>
            <Link  to="/NewsFeed">News Feed</Link>
            </li>
            <li>
            <Link  to="/Search">Search Page</Link>
          </li>
        </ul>
        </div>
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
