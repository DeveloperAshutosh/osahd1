import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import SignUp from './sign-up/SignUp';
import SignIn from './sign-in/SignIn';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h2>Home page</h2>
                <button onClick={() => {
                    console.log("button clicked");
                }}>Logout</button>
                <SignUp />
                <SignIn />
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        state: state,
    };
}


export default connect(mapStateToProps)(HomePage);
