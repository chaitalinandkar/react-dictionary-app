import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
    }
  function search(event) {
    event.preventDefault();

    //documentation at https://api.dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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