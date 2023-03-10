import React from 'react'
import _get from 'lodash/get'
import { useMutation, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import CreateLyric from './CreateLyric'
import GET_SONG_BY_ID from '../queries/fetchSong'
import LyricItem from './LyricItem'
import LIKE_LYRIC from '../queries/likeLyric'

const SongDetail = () => {
  const { id } = useParams()
  const { data, loading } = useQuery(GET_SONG_BY_ID, { variables: { songId: id } })
  const [exec] = useMutation(LIKE_LYRIC)

  if (loading) return <p className='w-3/4 mx-auto'>Loading...</p>

  const { title, lyrics } = _get(data, 'song', {})

  const handleLike = (lyricId) => {
    exec({ variables: { lyricId } })
  }

  // graphQL data => JSX
  const renderLyrics = () => {
    if (lyrics && Array.isArray(lyrics)) {
      return lyrics.map(lyric => (
        <LyricItem key={lyric.id} {...lyric} handleLike={handleLike} />
      ))
    }
  }

  return (
    <section className="song-detail w-3/4 mx-auto">
      <h2 className="text-2xl font-medium mb-8">{title}</h2>
      <ul className='list-none mx-auto'>
        {renderLyrics()}
      </ul>
      <hr className='mb-6 mt-20' />
      <CreateLyric songId={id} />
    </section>
  )
}

export default SongDetail
