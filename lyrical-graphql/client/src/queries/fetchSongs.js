import { gql } from '@apollo/client'

const GET_SONGS = gql`
  query {
    songs{ id, title }
  }
`

export default GET_SONGS
