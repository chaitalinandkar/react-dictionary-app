import React from "react";
import "./Dictionary.css"

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <form>
        <input type='text' placeholder="Enter a word here..." className="Search-Engine" autoFocus={true}></input>
      </form>
    </div>
  );
}