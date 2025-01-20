import React from 'react'
import ComponentD from "./ComponentD"
import { useContext } from 'react'
import { userContext } from './ComponentA'

const ComponentC = () => {
  const user = useContext(userContext);
  return (
    <div  className=' border-2 border-black m-4 p-6'>
      <h1>ComponentC</h1>
      <ComponentD></ComponentD>
    </div>
  )
}

export default ComponentC
 