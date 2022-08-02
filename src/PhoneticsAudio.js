import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function PhoneticsAudio(props) {
  
  if (props.audio.phonetics[0].audio.length > 0) {
  return (
    <div className="mt-3">
      <ReactAudioPlayer
        src={props.audio.phonetics[0].audio}
        autoPlay={false}
        controls
      />
    </div>
  );
  } else if (props.audio.phonetics[1].audio.length > 0) {
  return (
    <div className="mt-3">
      <ReactAudioPlayer
        src={props.audio.phonetics[1].audio}
        autoPlay={false}
        controls
      />
    </div>
  );
  } else{
      return null;
  }

}