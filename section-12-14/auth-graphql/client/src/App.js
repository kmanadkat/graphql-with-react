import _get from "lodash/get";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Navbar from "./components/Navbar";
import EnsureAuth from "./hocs/AuthedRoutes";
import useAuth from "./hooks/useAuth";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const {
    authData, authLoading,
    handleSignUp, signUpLoading,
    handleSignIn, signInLoading,
    handleSignOut, signOutLoading
  } = useAuth()

  const user = _get(authData, 'user', null)
  const authenticated = !authLoading && user

  return (
    <BrowserRouter>
      <Navbar
        authenticated={authenticated}
        handleSignOut={handleSignOut}
        signOutLoading={signOutLoading} />
      <main className="w-3/4 mx-auto">
        <Toaster position="bottom-center" />
        <Routes>
          {/* Hidden When Signed in */}
          <Route path="/*" element={
            <EnsureAuth authenticated={authenticated}>
              <Routes>
                <Route path="/" element={<LandingPage loading={authLoading} />} />
                <Route path="/sign-up" element={<SignUpPage handleSignup={handleSignUp} loading={signUpLoading} />} />
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
