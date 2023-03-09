import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import SongItem from './SongItem'
import GET_SONGS from '../queries/fetchSongs'
import DELETE_SONG_MUTATION from '../queries/deleteSong'

const SongList = () => {
  const { loading, error, data, refetch } = useQuery(GET_SONGS)
  const [exec] = useMutation(DELETE_SONG_MUTATION)

  const handleDelete = (songId) => {
    exec({ variables: { songId } }).then(() => refetch())
  }

  // graphQL data => JSX
  const renderSongs = () => {
    if (data && Array.isArray(data.songs)) {
      return data.songs.map(song => (
        <SongItem
          key={song.id}
          songId={song.id}
          title={song.title}
          handleDelete={handleDelete} />
      ))
    }
  }

  // Loading
  if (loading) return <p className='w-3/4 mx-auto'>Loading...</p>

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
