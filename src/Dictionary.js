import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`You searched for ${keyword}`);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type='text' placeholder="Enter a word here..." className="Search-Engine" autoFocus={true} onChange={handleKeywordChange}></input>
      </form>
    </div>
  );
}