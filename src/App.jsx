// function TweetApp() {
//   return <>
//     {
//       isLoggedIn ? <Home /> : <Login />
//     }
//   </>
// }

import { SignupProvider } from "./context/SignupContext";
import CreateAccount from "./pages/CreateAccount";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";

function App() {
  return <>
    {/* <LandingPage /> */}
    {/* <SignupProvider>

      <CreateAccount />
    </SignupProvider> */}
    <SignIn />
  </>
  //  <TweetApp />
}

export default App;
