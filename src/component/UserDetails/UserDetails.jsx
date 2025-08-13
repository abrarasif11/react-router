import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const UserDetails = () => {
    const navigate = useNavigate();
    const user = useLoaderData();
    const {name , email, website} = user;
    const handleBack = () => {
      navigate(-1);
    }
  return (
    <div>
      <h1>User Name : {name}</h1>
      <h3>User Email : {email}</h3>
      <h4>User Website : {website}</h4>
      <button onClick={handleBack}>Go Back</button>
    </div>
  )
}

export default UserDetails
