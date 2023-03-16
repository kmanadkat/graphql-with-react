import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = ({ loading, authenticated }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (authenticated) {
      navigate('/dashboard')
    }
  }, [authenticated, navigate])

  return (
    <div>
      <p className="text-xl font-semibold">
        {loading ? 'Loading...' : 'Welcome!'}
      </p>
    </div>
  )
}

export default LandingPage
