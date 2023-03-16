import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = ({ loading, authenticated }) => {
  const navigate = useNavigate()
  if (authenticated) {
    navigate('/dashboard')
  }

  const getWelcomeMessage = () => {
    let message = 'Welcome!'
    if (loading) {
      message = 'Loading...'
    }
    return message
  }

  return (
    <div>
      <p className="text-xl font-semibold">{getWelcomeMessage()}</p>
    </div>
  )
}

export default LandingPage
