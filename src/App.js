import "./App.css";
import useSound from "use-sound";
import morse from "./morse.wav";
import { useState, useEffect, useCallback } from "react";
import raccoon from "./fat-raccoon.png";
import speaker from "./speaker.png";

function App() {
  const [play] = useSound(morse, {
    interrupt: false,
  });
  const [playSound, setPlaySound] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const longPress = useLongPress(() => {
    if (!playSound) {
      console.log("long");
      setPlaySound(true);
    }
  }, 2000);

  return (
    <div>
      {!playSound && (
        <img
          src={raccoon}
          alt="raccoon"
          id="raccoon"
          style={{ top: top + "px", left: left + "px" }}
          {...longPress}
          onClick={() => {
            console.log("short");
            setTop(Math.floor(Math.random() * (window.innerHeight - 186)));
            setLeft(Math.floor(Math.random() * (window.innerWidth - 252)));
            if (setPlaySound) {
              play();
            }
          }}
        />
      )}
      {playSound && (
        <div id="speaker-wrapper">
          <img
            src={speaker}
            alt="speaker"
            id="speaker"
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      )}
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