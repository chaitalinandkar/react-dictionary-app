import React from "react";
import "./Meaning.css"

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="text-capitalize">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
          <p className="fw-semibold">Definition : {definition.definition}</p>
          <em><p>Example : {definition.example}</p></em>
        </div>
        )
      })}
      
    </div>
    
    
  );
}