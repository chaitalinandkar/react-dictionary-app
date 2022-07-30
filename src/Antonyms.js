import React from "react";

export default function Antonyms(props) {
  
  return (
    <ul className="Antonyms">
      {props.antonyms.map(function (antonyms, index) {
        return <li key={index}>{antonyms}</li>
      })}
    </ul>
  );
    
}