import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return (
    <div>
      {" "}
      Welcome {user.Username} Your Email ID is {user.Gmail}
    </div>
  );
}

export default Profile;
