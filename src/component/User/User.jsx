import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Users from './Users';

const User = () => {
    const users = useLoaderData();
  return (
    <div>
      <h2>The Users...</h2>
      <div>
        {
            users.map(user => <Users
            key={user.id}
            user={user}
            />)
        }
      </div>
    </div>
  )
}

export default User
