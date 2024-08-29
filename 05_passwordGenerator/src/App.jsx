import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [num, setnum] = useState(false);
  const [char, setChar] = useState(false);
  const [Password, setPassword] = useState("");

  const passRef = useRef(null);

  const pass_maker = useCallback(
    function () {
      let password = "";
      let abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (num) abc += "0123456789";
      if (char) abc += ".,?/|!@#$%^&*(){}][";
      for (let i = 0; i < length; i++) {
        password += abc.charAt(Math.floor(Math.random() * abc.length + 1));
      }
      setPassword(password);
    },
    [setPassword, length, num, char]
  );

  const copyPass = useCallback(()=>{
    passRef.current?.select();
    //this is direct
    window.navigator.clipboard.writeText(Password);
  }, [Password]);
  useEffect(()=>{
    pass_maker();
  }, [length, num, char, pass_maker])
  return (
    <>
      <h1 className="text-4xl text-center my-5">Password Generator</h1>
      <div
        className="w-full max-w-xl mx-auto shadow-md rounded-lg
        p-5 m-8 text-orange-500 bg-gray-800 text-2xl"
      >
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full rounded-lg py-1 px-3"
            placeholder="Password"
            ref={passRef}
            readOnly
          />
          <button 
          onClick={copyPass}
          className="p-3 rounded-lg bg-slate-600 text-white shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-base gap-x-10 ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={num}
              id="numberInput"
              onChange={() => {
                setnum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={num}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
