import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UserDetails = () => {
    const user = useLoaderData();
    const {name , email, website} = user
  return (
    <div>
      <h1>User Name : {name}</h1>
      <h3>User Email : {email}</h3>
      <h4>User Website : {website}</h4>
    </div>
  )
}

export default UserDetails
