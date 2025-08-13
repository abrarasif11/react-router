import React from 'react'

const Users = ({user}) => {
  return (
    <div>
      <h1>User Name : {user.name}</h1>
      <h2>Email : {user.email}</h2>
    </div>
  )
}

export default Users
