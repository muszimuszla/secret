import "./App.css";
import morse from "./morse.wav";
import { useEffect } from "react";
import speaker from "./speaker.png";
import { useGlobalAudioPlayer } from "react-use-audio-player";

function Sound() {
  console.log("aaa");
  const { load } = useGlobalAudioPlayer();

  useEffect(() => {
    load(morse, {
      autoplay: true,
      loop: true,
    });
  }, [load]);

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
