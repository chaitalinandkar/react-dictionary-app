import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
          <p>Definition : {definition.definition}</p>
          <em><p>Example : {definition.example}</p></em>
        </div>
        )
      })}
      
    </div>
    
    
  );
}