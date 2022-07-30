import React from "react";
import Example from "./Example";
import "./Meaning.css"


export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="text-capitalize mb-5">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
          <p className=""><strong>Definition :</strong> {definition.definition}</p>
          <Example example={definition.example} />
          <hr></hr>  
        </div>
        )
      })}
      
      
    </div>
    
    
  );
}