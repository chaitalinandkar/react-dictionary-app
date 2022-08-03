import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function PhoneticsAudio(props) {
  
  if (props.phonetics.audio.length > 0 && props.phonetics.text) {
    return (
      <div className="mt-3">
        <div>
          <ReactAudioPlayer
            src={props.phonetics.audio}
            autoPlay={false}
            controls
          />
        </div>
      
        <div className="mt-3">
          <h3>{props.phonetics.text}</h3>
        </div>
      </div>
    );
  } else if (props.phonetics.audio.length > 0) {

      return (
        <div className="mt-3">
        <div>
          <ReactAudioPlayer
            src={props.phonetics.audio}
            autoPlay={false}
            controls
          />
        </div>
      
        <div className="mt-3">
          <h3>{props.phonetics.text}</h3>
        </div>
      </div>
      );
  } else if (props.phonetics.text) {

      return (
        <div className="mt-3">
          <h3>{props.phonetics.text}</h3>
        </div>
      );
  } else {
      return null;
  }

}