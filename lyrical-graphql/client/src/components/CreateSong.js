import React, { useState } from 'react'

const CreateSong = () => {
  const [songName, setSongName] = useState('')

  const handleChange = e => {
    const value = e.target.value
    setSongName(value)
  }

  return (
    <section className="create-song w-3/4 mx-auto">
      <h2 className="text-2xl font-medium mb-8">Create A Song</h2>
      <form>
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
        <button type="submit" className="primary-button">
          Submit
        </button>
      </form>
    </section>
  )
}

export default CreateSong
