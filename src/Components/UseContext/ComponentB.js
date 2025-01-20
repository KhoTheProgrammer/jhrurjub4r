import React from 'react'
import ComponentC from "./ComponentC"

const ComponentB = () => {
  return (
    <div  className=' border-2 border-black m-4 p-6'>
      <h1>ComponentB</h1>
      <ComponentC ></ComponentC>
    </div>
  )
}

export default ComponentB
 