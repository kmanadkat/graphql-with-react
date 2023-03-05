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
      return <>{data.songs.map(song => (
        <li key={song.id} className="px-8 py-3 border my-2">{song.title}</li>
      ))}</>
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
    <section className='w-3/4 mx-auto mt-12'>
      <h2 className='text-xl font-medium mb-6'>Songs List</h2>
      <ul className='list-none mx-auto'>
        {renderSongs()}
      </ul>
    </section>
  )
}

export default SongList
