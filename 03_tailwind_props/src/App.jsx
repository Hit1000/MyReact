import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/cards";



function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name : "hitesh",
    age : 20
  }
  let arr = [0];
  arr.push(1);
  arr.push(1);
  arr.push(1);

  return (
    <>
      <h1 className="bg-red-600 p-5 rounded-xl mb-8 text-black">test</h1>

      <Cards val="Alice" obj={arr}/>
      <Cards val="Sofiea"/>
    </>
  );
}

export default App;
