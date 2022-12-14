import React from "react";
import Meaning from "./Meaning";
import "./Results.css"
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import Phonetics from "./Phonetics";



export default function Results(props) {

  if (props.result) {
    return (
      <div className="Results">
        <div className="searchedWord">
          
          <h4 className="fs-1 text-capitalize">{props.result.word}</h4>
    
          {props.result.phonetics.map(function (audio, index) {
            return <span key={index}><Phonetics phonetics={audio} /></span>
          })}

        </div>
        
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          )
        })}
        <div className="Synonyms-block mt-5">
          <strong>Synonyms  </strong><Synonyms synonyms={props.result.meanings[0].synonyms} />
        </div>
        <div className="Antonyms-block mt-5">
          <strong>Antonyms : </strong><Antonyms antonyms={props.result.meanings[0].antonyms}/>
        </div>
        
      </div>
    );
  } else {
    return null;
  }
  
 
}
