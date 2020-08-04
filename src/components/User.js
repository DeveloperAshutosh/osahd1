import React, {useState, useEffect} from 'react'
import axios from 'axios'

function User() {
    const [users, setUsers] = useState([]) 

    useEffect(() => {
        axios.get(' https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
            setUsers(res.data)
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
        <li key={user.id}>Name:{user.name} {"\n"}Username:{user.username}{"\n"}Email:{user.email}{"\n"}Phone:{user.phone}</li>
    ))}
    </ul> 
        </div>
    )
}

export default User;

