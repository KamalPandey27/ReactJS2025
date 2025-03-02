import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
function TestFile() {
  const { user, setUser } = useContext(UserContext);
  const [newUser, SetNewUser] = useState("Kamal");
  function handleEvent() {
    SetNewUser("Anmol");
    setUser({ newUser });
  }
  return (
    <div>
      <div> {user.Gmail}</div>
      <button onClick={handleEvent}>New user is {newUser}</button>
    </div>
  );
}

export default TestFile;
