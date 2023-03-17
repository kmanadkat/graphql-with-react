import { useMutation, useQuery } from "@apollo/client"
import GET_AUTH_USER from "../queries/authStatus"
import SIGN_IN_USER from "../queries/signIn"
import SIGN_OUT_USER from "../queries/signOut"
import SIGN_UP_USER from "../queries/signUp"

const useAuth = () => {
  const { data: authData, loading: authLoading } = useQuery(GET_AUTH_USER)
  const [execSignUp, { loading: signUpLoading }] = useMutation(SIGN_UP_USER)
  const [execSignIn, { loading: signInLoading }] = useMutation(SIGN_IN_USER)
  const [execSignOut, { loading: signOutLoading }] = useMutation(SIGN_OUT_USER)

  const handleSignUp = (email, password) => {
    execSignUp({ variables: { email, password }, refetchQueries: [GET_AUTH_USER] })
  }

  const handleSignIn = (email, password) => {
    execSignIn({ variables: { email, password }, refetchQueries: [GET_AUTH_USER] })
  }

  const handleSignOut = () => {
    execSignOut({ refetchQueries: [GET_AUTH_USER] })
  }

  return {
    authData, authLoading,
    handleSignUp, signUpLoading,
    handleSignIn, signInLoading,
    handleSignOut, signOutLoading
  }
}

export default useAuth
