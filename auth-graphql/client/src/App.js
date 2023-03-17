import { useMutation, useQuery } from "@apollo/client";
import _get from "lodash/get";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import EnsureAuth from "./hocs/AuthedRoutes";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import GET_AUTH_USER from "./queries/authStatus";
import SIGN_IN_USER from "./queries/signIn";
import SIGN_OUT_USER from "./queries/signOut";

function App() {
  const { data, loading } = useQuery(GET_AUTH_USER)
  const [execSignIn, { loading: signInLoading }] = useMutation(SIGN_IN_USER)
  const [execSignOut, { loading: signOutLoading }] = useMutation(SIGN_OUT_USER)
  const user = _get(data, 'user', null)

  const handleSignOut = () => {
    execSignOut({ refetchQueries: [GET_AUTH_USER] })
  }

  const handleSignIn = (email, password) => {
    execSignIn({ variables: { email, password }, refetchQueries: [GET_AUTH_USER] })
  }

  const authenticated = !loading && user

  return (
    <BrowserRouter>
      <Navbar
        authenticated={authenticated}
        handleSignOut={handleSignOut}
        signOutLoading={signOutLoading} />
      <main className="w-3/4 mx-auto">
        <Routes>
          {/* Hidden When Signed in */}
          <Route path="/*" element={
            <EnsureAuth authenticated={authenticated}>
              <Routes>
                <Route path="/" element={<LandingPage loading={loading} />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/sign-in" element={<SignInPage handleSignIn={handleSignIn} loading={signInLoading} />} />
              </Routes>
            </EnsureAuth>
          } >
          </Route>
          {/* Hidden When Signed out */}
          <Route path="/dashboard" element={<Dashboard authenticated={authenticated} user={user} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
