import React from "react";
import { connect } from "react-redux";
import Nav from "../Nav";
import UserProfile from "../user-profile/UserProfile";
import SearchBar from "../search-bar/SearchBar";

class SearchPage extends React.Component {
  renderUsers() {
    return this.props.store.searchResults.map((user) => {
      return <UserProfile userData={user} />;
    });
  }

  render() {
    return (
      <>
        <Nav />
        <SearchBar />
        {this.renderUsers()}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state,
  };
}

export default connect(mapStateToProps)(SearchPage);
