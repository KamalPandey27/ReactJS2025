import React from "react";
import useContextMethod from "../Context/ContextSecondMethod";
function GetTestFile() {
  const { UserName } = useContextMethod();
  return <div>{UserName}</div>;
}

export default GetTestFile;
