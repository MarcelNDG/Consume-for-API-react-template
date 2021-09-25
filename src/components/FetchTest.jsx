import React, { useState, useEffect } from 'react'

const FetchTest = () => {
    const [equipo, setEquipo] = useState([])
    
    useEffect(() => {
    console.log('Holas');
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    setEquipo(users)
  }

  /*
  --- STATE ---
  1- const [equipo, setEquipo = useState([])] is the state variable where we are going to store
    the data that we fetch from the API
    a-The logic behind the syntax is that, equipo is a const like "const equipo", and setEquipo
      it's going to be like an instruction that changes the value of the const equipo to whatever
      new value it's going to have, can be number, string or boolean 
      const equipo = false -> setEquipo(true) -> const equipo = true, this can be triggered by events
    b- useState() is what holds the default value of const equipo, so, if const equipo is false, then
      is useState(false)
    c-When useState is null must be useState([])
  
  */


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
