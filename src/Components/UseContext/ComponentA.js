import React, { useState } from 'react'
import ComponentB from './ComponentB'
import { createContext } from 'react'
export const userContext = createContext();

const ComponentA = () => {
  const [user, setuser] = useState("kondwani");
  return (
    <div  className=' border-2 border-black m-4 p-6'>
      <h1>ComponentA</h1>
    <h1>Hi {user}</h1>
    <userContext.Provider value={[user, setuser]}>
    <ComponentB/>
    </userContext.Provider>
    </div>
  )
}

export default ComponentA
 