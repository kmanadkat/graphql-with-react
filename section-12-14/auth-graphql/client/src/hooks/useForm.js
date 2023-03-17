import { useState } from 'react'

const useForm = () => {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleChange = (event, type = 'email') => {
    const { value } = event.target
    switch (type) {
      case 'email':
        setEmailInput(value)
        break
      case 'password':
        setPasswordInput(value)
        break
      default:
        break
    }
  }

  return {
    emailInput,
    passwordInput,
    handleChange,
  }
}

export default useForm
