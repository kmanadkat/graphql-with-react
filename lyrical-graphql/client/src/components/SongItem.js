import React, { memo } from 'react'

const SongItem = ({ title, songId, handleDelete }) => {
  return (
    <li className="song-item">
      <span>{title}</span>
      <button onClick={() => handleDelete(songId)}>Delete</button>
    </li>
  )
}

export default memo(SongItem)
