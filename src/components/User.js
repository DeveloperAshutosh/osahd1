import React, {useState, useEffect} from 'react'
import axios from 'axios'

function User() {
    const [users, setUsers] = useState([]) 

    useEffect((e) => {

        axios.get('https://jsonstorage.net/api/items/4d56c6a1-9bd8-4795-b714-8b6e815d2edd')
        .then(res => {
            console.log(res)
            setUsers(res.data.users)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])
    return (
        <div>
           <ul>
               "Users detail"
    {users.map(user => (
        <li key={user.id}>Name:{user.name} {"\n"}Username:{user.username}{"\n"}Email:{user.email}{"\n"}</li>
    ))}
    </ul> 
        </div>
    )
}

export default User;

