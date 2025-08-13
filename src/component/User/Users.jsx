import React from 'react'
import { Link } from 'react-router-dom'

const Users = ({user}) => {
  return (
    <div>
      <h1>User Name : {user.name}</h1>
      <h2>Email : {user.email}</h2>
      <Link to={`/users/${user.id}`}>Show Details</Link>
    </div>
  )
}

export default Users
