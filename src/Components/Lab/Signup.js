import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <h1 className='text-xl font-bold uppercase'>This is signup</h1>
      <NavLink to="/Home">Go to Home</NavLink>
    </div>
  )
}

export default Signup
