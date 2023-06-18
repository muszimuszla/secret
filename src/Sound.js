import "./App.css";
import morse from "./morse.wav";
import { useEffect } from "react";
import speaker from "./speaker.png";

function Sound() {
  useEffect(() => {
    let audio = new Audio(morse)
    audio.play();
  }, []);

  return (
    <div id="speaker-wrapper">
      <img
        src={speaker}
        alt="speaker"
        id="speaker"
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
  );
}

export default Sound;
