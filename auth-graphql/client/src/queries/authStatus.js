import { gql } from "@apollo/client";

const GET_AUTH_USER = gql`
  query {
    user{ id, email }
  }
`

export default GET_AUTH_USER