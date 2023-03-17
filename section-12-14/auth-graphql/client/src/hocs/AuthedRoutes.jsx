import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthedRoutes = ({ children, authenticated }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (authenticated) {
      navigate('/dashboard')
    }
  }, [navigate, authenticated])

  return <>{children}</>
}

export default AuthedRoutes
