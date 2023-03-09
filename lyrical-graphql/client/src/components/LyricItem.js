import React from 'react'

const LyricItem = ({ id, content, likes }) => {
  return (
    <li className='list-item'>
      <span>{content}</span>
      <div className='likes-wrapper'>
        <button className='primary'>Like</button>
        <span>{likes}</span>
      </div>
    </li>
  )
}

export default LyricItem