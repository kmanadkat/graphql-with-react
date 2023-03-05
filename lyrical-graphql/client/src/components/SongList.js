import React from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_SONGS = gql`
  query {
    songs{ id, title }
  }
`

const SongList = () => {
  const { loading, error, data } = useQuery(GET_SONGS)

  // graphQL data => JSX
  const renderSongs = () => {
    if (data && Array.isArray(data.songs)) {
      return <>{data.songs.map(song => <li key={song.id}>{song.title}</li>)}</>
    }
  }

  // Loading
  if (loading) return <p>Loading...</p>

  // Error Handling
  if (error) {
    console.error(error)
    return <p>Error Loading!</p>
  }

  return (
    <ul>
      {renderSongs()}
    </ul>
  )
}

export default SongList
