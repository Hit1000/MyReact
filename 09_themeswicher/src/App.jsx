import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = ()=>{
    setThemeMode("light");
  }
  const darkTheme = ()=>{
    setThemeMode("dark");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX - 10);
    setCursorY(e.pageY- 10);
  })

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center ">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme btn */}
            <Button />
          </div>

          <div className="w-full max-w-l gap-2 mx-auto flex hover-item" id="card">
            {/* card */}
            <Card />
            <Card />
            <Card />
          </div>
          <div className='cursor' style={{left:cursorX+'px', top:cursorY+'px'}}></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
