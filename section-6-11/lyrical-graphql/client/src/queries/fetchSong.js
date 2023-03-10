import { gql } from "@apollo/client";

const GET_SONG_BY_ID = gql`
  query GetSong($songId: ID!){
    song(id: $songId){
      id, title, lyrics{
        id, likes, content
      }
    }
  }
`

export default GET_SONG_BY_ID
