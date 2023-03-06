import React from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import SongItem from './SongItem'
import GET_SONGS from '../queries/fetchSongs'

const SongList = () => {
  const { loading, error, data } = useQuery(GET_SONGS)

  // graphQL data => JSX
  const renderSongs = () => {
    if (data && Array.isArray(data.songs)) {
      return data.songs.map(song => (
        <SongItem key={song.id} title={song.title} />
      ))
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
