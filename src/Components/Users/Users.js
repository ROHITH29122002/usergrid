import React from 'react'
import User from '../User/User'

function Users({users}) {
  return (
    <>
    {users.map(user => {
      return <User user={user} key={user.id}/>;
    })}
    </>
  )
}

export default Users
