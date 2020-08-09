import React from "react";
import { connect } from "react-redux";
import Nav from "../Nav";
import UserProfile from "../user-profile/UserProfile";
import SearchBar from "../search-bar/SearchBar";
import UnauthorizedUser from "../unauthorized-user/UnauthorizedUser";
import "./SearchPage.css";
import Logo from "../../images/Logo.png";

class SearchPage extends React.Component {
  // handle the rendering of search results / error messages
  renderUsers() {
    // display a message if no search results exist
    if (this.props.store.searchResults.length === 0) {
      return (
        <>
          <h2>No results found :(</h2>
          <p>Enter a user's name or activities to search for</p>
        </>
      );
    }
    // else display the search results
    else {
      return this.props.store.searchResults.map((user) => {
        return <UserProfile userData={user} />;
      });
    }
  }

  // handle the rendering of search page / error message for logged out users
  renderSearchPage() {
    if (this.props.store.isLoggedIn === false) {
      return <UnauthorizedUser />;
    } else {
      return (
        <div className="searchPageBackground">
          <div>
            <div className="logoSearchPage">
              <img src={Logo} alt="logo" />
            </div>
            <div>
              <Nav />
              <h1>SEARCH</h1>
              <SearchBar />
            </div>
          </div>
          <div>{this.renderUsers()}</div>
        </div>
      );
    }
  }

  render() {
    return this.renderSearchPage();
  }
}

function mapStateToProps(state) {
  return {
    store: state,
  };
}

export default connect(mapStateToProps)(SearchPage);
