import React, { Component} from 'react';

class Post extends Component{
    constructor(props) {
        super(props);
    }






render(){

    return(
        <>
    <h3>{this.props.postData.title}</h3>
    <p>{this.props.postData.body}</p>
    </>
    )
   
}



    }
    export default Post;



