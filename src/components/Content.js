import React, { Component} from 'react';
import axios from 'axios'
import Post from './Post';

class Content extends Component{
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
            let title = data.posts;
            this.setState({title: title});
        })
        
    }
    render() {
        return(
            <>
                 <button
                 onclick={ () => {
console.log ("button clicked");
                 }}
                 >Refresh</button>
                <div className ="container1">
                    {this.state.title.map((pic) => {
           
               return (
                   <p>hello</p>
               )
                   
                //    <Post postData={pic} />
                    
                    }
            )}
            </div>
          </>
        )
    }
}
    export default Content;

