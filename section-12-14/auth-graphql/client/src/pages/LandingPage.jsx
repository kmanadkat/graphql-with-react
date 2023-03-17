import React from 'react'

const LandingPage = ({ loading }) => {
  return (
    <div>
      <p className="text-xl font-semibold">
        {loading ? 'Loading...' : 'Welcome!'}
      </p>
    </div>
  )
}

export default LandingPage
