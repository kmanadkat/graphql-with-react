import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import GET_SONGS from '../queries/fetchSongs'
import ADD_SONG_MUTATION from '../queries/addSong'


const CreateSong = () => {
  const navigate = useNavigate();
  const [songName, setSongName] = useState('')
  const [execute, { loading }] = useMutation(ADD_SONG_MUTATION)

  const handleChange = e => {
    const value = e.target.value
    setSongName(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    execute({
      variables: { songTitle: songName },
      refetchQueries: [{ query: GET_SONGS }],
    }).then(data => {
      console.log(data)
      setSongName('')
      navigate('/')
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
