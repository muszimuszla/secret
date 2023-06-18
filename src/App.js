import "./App.css";
import { useState, useEffect, useCallback } from "react";
import raccoon from "./fat-raccoon.png";
import Sound from "./Sound";

function App() {
  const [playSound, setPlaySound] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const longPress = useLongPress(() => {
    if (playSound === 0) {
      setPlaySound(1);
    }
  }, 2000);

  return (
    <div>
      {playSound === 0 && (
        <img
          src={raccoon}
          alt="raccoon"
          id="raccoon"
          style={{ top: top + "px", left: left + "px" }}
          {...longPress}
          onClick={() => {
            setTop(Math.floor(Math.random() * (window.innerHeight - 186)));
            setLeft(Math.floor(Math.random() * (window.innerWidth - 252)));
          }}
          onContextMenu={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            return false;
          }}
        />
      )}
      {playSound === 1 && <Sound />}
    </div>
  );
}

export default App;

function useLongPress(callback = () => {}, ms = 300) {
  const [startLongPress, setStartLongPress] = useState(false);

  useEffect(() => {
    let timerId;
    if (startLongPress) {
      timerId = setTimeout(callback, ms);
    } else {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [callback, ms, startLongPress]);

  const start = useCallback(() => {
    setStartLongPress(true);
  }, []);
  const stop = useCallback(() => {
    setStartLongPress(false);
  }, []);

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
  };
}
