import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div className="w-full h-screen duration-500" style={{ background: color }}>
      <div
        className="fixed flex flex-wrap 
      justify-center inset-x-0 px-2 bottom-12"
      >
        <div
          className="flex flex-wrap justify-center gap-3
        shadow-lg bg-white px-3 py-2 rounded-2xl"
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 
          rounded-xl shadow-lg text-white"
            style={{ background: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 
          rounded-xl shadow-lg text-white"
            style={{ background: "green" }}
          >
            Green
          </button>
          <button
           onClick={()=>setColor("blue")} 
            className="outline-none px-4 py-1 
          rounded-xl shadow-lg text-white"
            style={{ background: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
