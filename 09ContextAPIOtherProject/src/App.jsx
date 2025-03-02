import React, { useState } from "react";
import { ContextSecondMethodProvider } from "./Context/ContextSecondMethod";
import TestFile from "./Components/TestFile";
import GetTestFile from "./Components/GetTestFile";
function App() {
  const [UserName, SetUserName] = useState(0);
  return (
    <ContextSecondMethodProvider
      value={{
        UserName,
        SetUserName,
      }}
    >
      <TestFile />
      <GetTestFile />
    </ContextSecondMethodProvider>
  );
}

export default App;
