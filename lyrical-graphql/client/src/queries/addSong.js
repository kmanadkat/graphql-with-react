import { gql } from '@apollo/client'

const ADD_SONG_MUTATION = gql`
  mutation AddSong($songTitle: String){
    addSong(title: $songTitle) {
      id,
      title
    }
  }
`
export default ADD_SONG_MUTATION
