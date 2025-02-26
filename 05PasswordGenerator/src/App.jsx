import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  let [Password, SetPassword] = useState("");
  let [length, SetLength] = useState(5);
  let [NumberAllowed, SetNumberAllowed] = useState(false);
  let [CharacterAllowed, SetCharacterAllowed] = useState(false);

  let PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (NumberAllowed) {
      str += "1234567890";
    }
    if (CharacterAllowed) {
      str += "!@#$%^&*()";
    }
    for (let index = 0; index < length; index++) {
      let RandomeNumber = Math.floor(Math.random() * str.length);
      pass += str[RandomeNumber];
    }
    SetPassword(pass);
  }, [length, NumberAllowed, CharacterAllowed]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, NumberAllowed, CharacterAllowed]);

  let PasswordRef = useRef("");
  function CopyToClipboard() {
    PasswordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  }

  return (
    <>
      <div className="text-white mt-7 bg-gray-500 w-xl m-auto h-25 p-4 rounded">
        <div className="flex items-center justify-center w-full">
          <input
            type="text"
            readOnly
            ref={PasswordRef}
            className="bg-white text-black p-1 w-[70%] rounded-tl-md rounded-bl-md"
            value={Password}
          />
          <button
            className="p-1 bg-blue-500 rounded-tr-md rounded-br-md"
            onClick={CopyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex items-center justify-center gap-4 pt-3">
          <input
            className="w-40"
            type="range"
            min={5}
            max={20}
            onChange={(e) => {
              SetLength(e.target.value);
            }}
          />
          <div>Length : {length}</div>
          <div className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              value={NumberAllowed}
              defaultChecked={NumberAllowed}
              onChange={() => {
                SetNumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              value={CharacterAllowed}
              defaultChecked={CharacterAllowed}
              onChange={() => {
                SetCharacterAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
