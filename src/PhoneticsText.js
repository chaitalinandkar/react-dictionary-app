import React from "react";

export default function PhoneticsText(props) {
  if (props.text.text) {
  return (
    <div className="mt-3">
      <h3>{props.text.text}</h3>
    </div>
  );
  } else {
      return null;
  }
  

}