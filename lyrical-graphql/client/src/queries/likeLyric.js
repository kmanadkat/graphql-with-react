import { gql } from "@apollo/client"

const LIKE_LYRIC = gql`
  mutation LikeLyric($lyricId: ID){
    likeLyric(id: $lyricId){
      id, likes
    }
  }
`

export default LIKE_LYRIC
