import React from 'react'

const EmailInput = ({ value, handleChange, disabled }) => {
  return (
    <div className="form-wrapper">
      <label htmlFor="emailId">Email Id</label>
      <input
        id="emailId"
        value={value}
        onChange={e => handleChange(e, 'email')}
        type="email"
        required
        disabled={disabled}
      />
    </div>
  )
}

export default EmailInput
