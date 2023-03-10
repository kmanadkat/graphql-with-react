import { gql } from "@apollo/client";

const DELETE_SONG_MUTATION = gql`
  mutation DeletSong($songId: ID) {
    deleteSong(id: $songId){
      id
    }
  }
`

export default DELETE_SONG_MUTATION
