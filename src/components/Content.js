import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Content() {
    const [posts, setPosts] = useState([]) 

    useEffect(() => {
        axios.get('https://jsonstorage.net/api/items/f2c563c1-bff6-469b-a954-0dab52edc4c3')
        .then(res => {
            console.log(res)
            setPosts(res.data.posts)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])
    return (
        <div>
           <ul>
    {posts.map(post => (
        <li key={post.id}>{post.title}</li>
    ))}
    </ul> 
        </div>
    )
}

export default Content;

