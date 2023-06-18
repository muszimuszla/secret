import "./App.css";
import { useState } from "react";
import morse from "./morse.wav";
import volume from "./volume.png";
import play from "./play.png"

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  let audio = new Audio(morse);
  audio.loop=true;

  return (
    <div className="wrapper">
      <img
        src={isPlaying ? volume : play}
        alt="m"
        className="speaker"
        onClick={() => {
          if (!isPlaying) {
            setIsPlaying(true);
            audio.play();
          }
        }}
      />
    </div>
  );
}

export default App;
