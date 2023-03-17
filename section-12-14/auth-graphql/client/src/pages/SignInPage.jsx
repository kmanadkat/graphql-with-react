import React from 'react'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import useForm from '../hooks/useForm'

const SignInPage = ({ handleSignIn, loading }) => {
  const { emailInput, passwordInput, handleChange } = useForm()

  const handleSubmit = event => {
    event.preventDefault()
    handleSignIn(emailInput, passwordInput)
  }

  return (
    <div>
      <h1 className="text-2xl font-medium mb-10">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <EmailInput
          value={emailInput}
          handleChange={handleChange}
          disabled={loading}
        />
        <PasswordInput
          value={passwordInput}
          handleChange={handleChange}
          disabled={loading}
        />
        <button type="submit" className="primary" disabled={loading}>
          {loading ? 'Processing' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default SignInPage
