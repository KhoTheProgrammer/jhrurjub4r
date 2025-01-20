import React from 'react'
import { useContext } from 'react'
import { userContext } from './ComponentA'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

const ComponentD = () => {
  
  const [user, setuser]= useContext(userContext);
  return (
    <div className=' border-2 border-black m-4 p-6'>
      <h1>ComponentD</h1>
      <h1>I am {user}</h1>
      <h1 onClick={() => setuser("Osma daud")}>Bye {user}</h1>
    </div>
  )
}
export default ComponentD
