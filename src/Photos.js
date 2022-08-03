import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          
            {props.photos.map(function (photo, index) {
              return (
            <div className="col-4" key={index}>
              <a href={photo.src.original} rel="noreferrer" target="_blank">
                <img src={photo.src.landscape} alt={photo.photoghrapher} className="img-fluid mb-3 rounded shadow"></img>
              </a>
            </div>
          )
        })}
          
        </div>
        
      </div>
    )
  } else {
    return null;
  }
}