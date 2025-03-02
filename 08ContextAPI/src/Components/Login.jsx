import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Gmail, setGmail] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ Username, Password, Gmail });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="text"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="email"
        value={Gmail}
        onChange={(e) => setGmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
