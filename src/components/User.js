import React, { Component} from 'react';
import axios from 'axios'

class User extends Component{
    constructor() {
        super();
        this.state ={
            pictures: []
        };
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
        .then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) => {
                return(
                    <div key ={pic.results}>
<img src={pic.picture.medium}/>
                    </div>
                )
            })
            this.setState({pictures: pictures});
        })
        
    }
    render() {
        return(
            <div className ="container 2">
                <div className ="container1">
                    {this.state.pictures}
            </div>
            </div>
        )
        }
    }
    export default User;

