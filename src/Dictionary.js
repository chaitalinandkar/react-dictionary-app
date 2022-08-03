import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.searchWord);
  let [result, setResult] = useState();
  let [loaded, setLoaded] = useState(false)

  function handleResponseKeyword(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
    }
  function search() {
    //documentation at https://api.dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponseKeyword);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }
  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  if(loaded){
    return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type='search' placeholder="Enter a word here..." className="Search-Engine" autoFocus={true} value={keyword} onChange={handleKeywordChange}></input>
        <p className="text-center ">Suggested searches : sunset, sunrise, merry, beautiful, shine, success....</p>
      </form>
      <Results result={result} />
    </div>
  );
  } else {
    load();
    return "Loading...."
  }
  
}