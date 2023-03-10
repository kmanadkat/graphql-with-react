import React from 'react'

const LyricItem = ({ id, content, likes, handleLike }) => {
  return (
    <li className='list-item'>
      <span>{content}</span>
      <div className='likes-wrapper'>
        <button className='primary' onClick={() => handleLike(id, likes)}>Like</button>
        <span>{likes}</span>
      </div>
    </li>
  )
}

export default LyricItem