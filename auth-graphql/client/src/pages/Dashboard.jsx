import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({ authenticated, user }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!authenticated) {
      navigate('/')
    }
  }, [navigate, authenticated])

  return <div>{user ? user.email : ''}</div>
}

export default Dashboard
