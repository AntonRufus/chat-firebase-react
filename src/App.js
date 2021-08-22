import "./App.css";
import Chat from "./components/Chat";
import Signin from "./components/SignIn";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return <div>{user ? <Chat /> : <Signin />}</div>;
}

export default App;
