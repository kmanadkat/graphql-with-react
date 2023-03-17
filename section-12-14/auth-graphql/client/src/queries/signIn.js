import { gql } from "@apollo/client";


const SIGN_IN_USER = gql`
  mutation SignInUser($email: String, $password: String) {
    signIn(email: $email, password: $password){
      id,
      email
    }
  }
`

export default SIGN_IN_USER
