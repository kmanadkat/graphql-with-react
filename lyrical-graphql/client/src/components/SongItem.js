import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const SongItem = ({ title, songId, handleDelete }) => {
  return (
    <Link to={`/songs/${songId}`}>
      <li className="song-item hover:bg-gray-50 transition">
        <span>{title}</span>
        <button onClick={() => handleDelete(songId)}>Delete</button>
      </li>
    </Link>
  )
}

export default memo(SongItem)
