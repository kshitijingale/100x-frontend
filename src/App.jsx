// function TweetApp() {
//   return <>
//     {
//       isLoggedIn ? <Home /> : <Login />
//     }
//   </>
// }

import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";

function App() {
  return <>
    {/* <Login /> */}
    <CreateAccount />
  </>
  //  <TweetApp />
}

export default App;
