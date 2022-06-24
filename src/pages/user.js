import React,{useEffect, useState} from 'react'
import axios from 'axios'
const User = () => {
    const [users, setuser] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users') 
            .then((response) => {
                setuser(response.data)
            })
            .catch((e) => console.log(e))
    }, [users])
    
  return (
    <div>
        {
            users.map((item, index) => {
                return (
                    <ul key={index}>
                        <li>
                            {item.name}
                        </li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default User