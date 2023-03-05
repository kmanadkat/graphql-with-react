import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'

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
    <section className='songs-list w-3/4 mx-auto'>
      <div className="header mb-6 flex items-center justify-between">
        <h2 className='text-2xl font-medium'>Songs List</h2>
        <Link className='primary-button' role="button" to="/songs/create">Create Song</Link>
      </div>
      <ul className='list-none mx-auto'>
        {renderSongs()}
      </ul>
    </section>
  )
}

export default SongList
