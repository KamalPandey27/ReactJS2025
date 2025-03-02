import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import TestFile from "./Components/TestFile";
import UserContextProvider from "./Context/UserContextProvider";
function App() {
  return (
    <UserContextProvider>
      <div>Kamal | Context API</div>
      <Login />
      <Profile />
      <TestFile />
    </UserContextProvider>
  );
}

export default App;
