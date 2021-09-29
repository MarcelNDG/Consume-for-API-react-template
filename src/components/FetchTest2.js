import React, { useState, useEffect } from 'react'

const FetchTest2 = () => {

    const [team, setTeam] = useState([])
    
    useEffect(() => {
        getData()
        
    }, [])

    const getData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        setTeam(users)
        console.log(users);
    }

    return (
        <div>

            <ul>
                {
                    team.map(item => (
                        <li key={item.id}>user.name</li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default FetchTest2
