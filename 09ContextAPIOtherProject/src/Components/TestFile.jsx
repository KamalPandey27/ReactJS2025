import React, { useEffect, useState } from "react";
import useContextMethod from "../Context/ContextSecondMethod";
function TestFile() {
  const { SetUserName } = useContextMethod();
  const [Data, SetData] = useState("Kamal");
  useEffect(() => {
    SetData("Kamal | Context API Code");
  }, []);

  useEffect(() => {
    SetUserName(Data);
  }, [Data]);

  return <div>{Data}</div>;
}

export default TestFile;
