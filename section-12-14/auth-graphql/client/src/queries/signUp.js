import { gql } from "@apollo/client";

const SIGN_UP_USER = gql`
  mutation SignUpUser($email: String, $password: String) {
    signUp(email: $email, password: $password){
      id,
      email
    }
  }
`

export default SIGN_UP_USER
