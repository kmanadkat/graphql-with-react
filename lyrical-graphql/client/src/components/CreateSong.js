import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

const ADD_SONG_MUTATION = gql`
  mutation AddSong($songTitle: String){
    addSong(title: $songTitle) {
      id,
      title
    }
  }
`

const CreateSong = () => {
  const [songName, setSongName] = useState('')
  const [execute, { loading }] = useMutation(ADD_SONG_MUTATION)

  const handleChange = e => {
    const value = e.target.value
    setSongName(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    execute({ variables: { songTitle: songName } }).then(data => {
      console.log(data)
      setSongName('')
    })
  }

  return (
    <section className="create-song w-3/4 mx-auto">
      <h2 className="text-2xl font-medium mb-8">Create A Song</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-8">
          <label htmlFor="song-title" className="font-semibold">
            Title:
          </label>
          <input
            id="song-title"
            type="text"
            className="primary-input"
            required
            value={songName}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="primary-button" disabled={loading}>
          Submit
        </button>
      </form>
    </section>
  )
}

export default CreateSong
