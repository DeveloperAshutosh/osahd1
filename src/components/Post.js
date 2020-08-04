import React, { Component} from 'react';
import axios from 'axios'

class Post extends Component{
    constructor() {
        super();
        this.state = {
            title: []
        };
    }
    componentDidMount() {
        fetch('https://jsonstorage.net/api/items/f2c563c1-bff6-469b-a954-0dab52edc4c3')
        .then(posts => {
            return posts.json();
        }).then(data => {
            let title = data.posts.map((pic) => {
                return(
               
                    <ul>
                    <li key ={pic.posts}>

                    </li>
                    </ul>
                )
            })
            this.setState({title: title});
        })
        
    }
    render() {
        return(
            <>
                 <button>Refresh</button>
                <div className ="container1">
                    {this.state.title}
            </div>
          </>
        )
    }
}
    export default Post;

