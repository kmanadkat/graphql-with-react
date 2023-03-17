import React from 'react'

const PasswordInput = ({ value, handleChange, disabled }) => {
  return (
    <div className="form-wrapper">
      <label htmlFor="passwordId">Password</label>
      <input
        id="passwordId"
        value={value}
        onChange={e => handleChange(e, 'password')}
        type="password"
        required
        disabled={disabled}
      />
    </div>
  )
}

export default PasswordInput
