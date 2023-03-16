import { gql } from "@apollo/client";

const SIGN_OUT_USER = gql`
  mutation {
    signOut {
      email
    }
  }
`

export default SIGN_OUT_USER