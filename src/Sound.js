import "./App.css";
import morse from "./morse.wav";
import { useState } from "react";
import speaker from "./speaker.png";

function Sound() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div id="speaker-wrapper">
      <img
        src={speaker}
        alt="speaker"
        id="speaker"
        onDragStart={(e) => e.preventDefault()}
        onClick={() => {
          if (!isPlaying) {
            setIsPlaying(true);
            let audio = new Audio(morse);
            audio.play();
            audio.onended(()=>{
                setIsPlaying(false);
            })
          }
        }}
      />
    </div>
  );
}

export default Sound;
