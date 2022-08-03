import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.searchWord);
  let [result, setResult] = useState();
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState();

  function handleResponseImages(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
    let apiKey = `563492ad6f917000010000010d9e80d74da348f6b72257540231c673`;
    let apiUrl = `https://api.pexels.com/v1/search?query=${keyword}&page=1&per_page=9`;
    axios.get(apiUrl,{ headers: { Authorization: `Bearer ${apiKey}` } }).then(handleResponseImages);
    }
  function search() {
    //documentation at https://api.dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
        <Photos photos={photos} />
    </div>
  );
  } else {
    load();
    return "Loading...."
  }
  
}