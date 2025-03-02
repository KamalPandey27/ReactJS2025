import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return (
    <div>
      {" "}
      Welcome {user.Username} Your Email ID is {user.Gmail} and new user is{" "}
      {user.newUser}
    </div>
  );
}

export default Profile;
