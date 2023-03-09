import React from 'react'

const CreateLyric = () => {
  return (
    <form className='flex flex-col gap-3'>
      <label htmlFor="lyricInput" className="font-semibold">Add Lyrics</label>
      <input id="lyricInput" className="primary-input" type="text" required />
      <button type='submit' className="mt-5 primary-button self-start">Submit</button>
    </form>
  )
}

export default CreateLyric
