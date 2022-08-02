import React from "react";

export default function PhoneticsText(props) {
  if (props.text.phonetics[1].text) {
  return (
    <div className="mt-3">
      <h3>{props.text.phonetics[1].text}</h3>
    </div>
  );
  } else if (props.text.phonetic.length > 0) {
    return (
      <div className="mt-3">
        <h3>{props.text.phonetic}</h3>
      </div>
    );
  } else {
      return null;
  }
  

}