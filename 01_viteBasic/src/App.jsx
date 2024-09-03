import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVar, setCursorVar] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.addEventListener("mousemove", mouseMove);
    };
  }, [position, setPosition]);

  const variants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
    },
    text: {
      x: position.x - 16,
      y: position.y - 16,
      scale: 6,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  };

  const textenter = () => setCursorVar('text');
  const textleave = () => setCursorVar('default');

  return (
    <>
      <div className="App">
        <h1 onMouseEnter={textenter} onMouseLeave={textleave} className="title">
          hello WORLD
        </h1>
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVar}
        />
      </div>
    </>
  );
}

export default App;
