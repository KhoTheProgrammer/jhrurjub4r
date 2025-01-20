import React from 'react';
import Users from './Users.json';

export default function Test(){
  return (
    <div>
      {Users.map( user => {
        return (
          <div>{user.lastname}</div>
        )
      })}
    </div>
  )
}
