import React, { useState, useEffect } from 'react'

const FetchTest = () => {

    const [equipo, setEquipo] = useState(null)
    
    useEffect(() => {
    console.log('Holas');
    obtenerDatos()
  }, [])
  
  

  const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    setEquipo(users)
  }


    return (
        <div>
          <ul>
            {
              equipo.map(item => (
                <li key={item.id}>{item.name} - {item.email}</li>
              )
               
              )
            }
          </ul>
          
            
        </div>
    )
}

export default FetchTest
