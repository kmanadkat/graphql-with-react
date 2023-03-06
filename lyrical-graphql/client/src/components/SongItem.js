import React, { memo } from 'react'

const SongItem = ({ title, songId }) => {
  return (
    <li className="song-item">
      <span>{title}</span>
      <button>Delete</button>
    </li>
  )
}

export default memo(SongItem)
