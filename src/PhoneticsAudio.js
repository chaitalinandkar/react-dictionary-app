import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function PhoneticsAudio(props) {
  
  if (props.audio.audio.length > 0) {
  return (
    <div className="mt-3">
      <ReactAudioPlayer
        src={props.audio.audio}
        autoPlay={false}
        controls
      />
    </div>
  );
  } else{
      return null;
  }

}