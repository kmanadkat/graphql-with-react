import { useMutation, useQuery } from "@apollo/client";
import _get from "lodash/get";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import GET_AUTH_USER from "./queries/authStatus";
import SIGN_OUT_USER from "./queries/signOut";

function App() {
  const { data, loading } = useQuery(GET_AUTH_USER)
  const [exec, { loading: signOutLoading }] = useMutation(SIGN_OUT_USER)

  const handleSignOut = () => {
    exec()
  }

  const getWelcomeMessage = () => {
    let message = 'Welcome!'
    const user = _get(data, 'user', null)
    if (loading || signOutLoading) {
      message = 'Loading...'
    } else if (user) {
      message = `${user.email}`
    }
    return message
  }

  return (
    <BrowserRouter>
      <Navbar handleSignOut={handleSignOut} />
      <main className="w-3/4 mx-auto">
        <Routes>
          <Route path="/" element={<LandingPage message={getWelcomeMessage()} />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
