import React from "react";
import { connect } from "react-redux";
import { setSearchResults } from "../../actions/social-media-app";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });

    // if no search entered, dispatchh search result with all users
    if (this.state.searchTerm.trim() === "" || this.state.searchTerm === null) {
      this.props.dispatch(setSearchResults(this.props.store.users));
    }
    // else lets find all users that match
    else {
      let usersFound = [];
      usersFound = this.props.store.users.filter((user) => {
        let activityMatched = false;
        let userNameMatched = false;

        for (let activity of user.activities) {
          console.log(activity);
          // if any activity in this users list of activities contains our search term, set activity matched to true
          if (activity.includes(this.state.searchTerm)) {
            activityMatched = true;
          }
        }

        // if any username matches our search term, set username matched to true
        if (user.name.includes(this.state.searchTerm)) {
          userNameMatched = true;
        }

        // if username/activity matches, return true to include the user in our filtered list
        return activityMatched || userNameMatched;
      });

      this.props.dispatch(setSearchResults(usersFound));
    }
  }

  render() {
    return (
      <>
        <label htmlFor="search">Search</label>
        <input
          name="search"
          type="text"
          placeholder="Search a name or activity"
          value={this.state.searchTerm}
          onChange={(event) => {
            this.handleSearchTermChange(event);
          }}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state,
  };
}

export default connect(mapStateToProps)(SearchBar);
