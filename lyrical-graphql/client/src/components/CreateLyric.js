import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import ADD_LYRIC from '../queries/addLyric'

const CreateLyric = ({ songId }) => {
  const [lyric, setLyric] = useState('')
  const [execute, { loading }] = useMutation(ADD_LYRIC)

  const handleChange = e => {
    const value = e.target.value
    setLyric(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    execute({
      variables: { songId, content: lyric },
    }).then(_ => {
      setLyric('')
    })
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <label htmlFor="lyricInput" className="font-semibold">Add Lyrics</label>
      <input
        id="lyricInput"
        className="primary-input"
        type="text"
        value={lyric}
        onChange={handleChange}
        required />
      <button type='submit' className="mt-5 primary-button self-start" disabled={loading}>Submit</button>
    </form>
  )
}

export default CreateLyric
