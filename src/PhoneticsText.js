import React from "react";

export default function PhoneticsText(props) {

  if (props.text) {
  return (
    <div className="mt-3">
      <h3>{props.text}</h3>
    </div>
  );
  } else {
      return null;
  }
  

}