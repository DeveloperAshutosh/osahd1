import React from "react";
import { connect } from "react-redux";
import Nav from "../Nav";
import UserProfile from "../user-profile/UserProfile";
import SearchBar from "../search-bar/SearchBar";
import UnauthorizedUser from "../unauthorized-user/UnauthorizedUser";

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
        <>
          <Nav />
          <h1>Search</h1>
          <SearchBar />
          {this.renderUsers()}
        </>
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
