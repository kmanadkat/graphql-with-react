import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({ authenticated, user }) => {
  const navigate = useNavigate()
  if (!authenticated) {
    navigate('/')
  }
  return <div>{user.email}</div>
}

export default Dashboard
