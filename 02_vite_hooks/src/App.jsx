import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 10;
  let [counter, setCounter] = useState(16);

  // function add(){// old method in javascript
  //   document.getElementById("id").innerHTML = ++counter;
  // }

  function increase(){
    setCounter(counter + 1);
  }
  function decrease(){
    if(counter > 0)
      setCounter(counter - 1);
  }
  const multi = () => setCounter(counter*counter)
  return (
    <>
      <h1>count: <spam id="id">{counter}</spam></h1>
      <button onClick={increase}>increase</button>
      <br />
      <button onClick={decrease}>decrease</button>
    </>
  )
}

export default App
