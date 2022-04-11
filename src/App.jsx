import React, { useState } from "react";
import { useEffect } from "react";
import './App.css'
import MovieCard from "./MovieCard";
//47:10


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=62138851";
const movie1={
  "Title":"Amazing Spiderman Syndrome",
  "Year":"2012",
  "imdbID":"tt2586634",
  "Type":"movie",
  "Poster":"N/A"
}
const App = () => {
  const [movies,setMovies]=useState([]);
  const [searchitem,setSearchitem]=useState(); 
  const searchMovies = async (title)=> {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
      setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovies('Spiderman')

  },[])
  return (
    <div className="app">
        <h1>Will Movies</h1>
        <div className="search">
          <input 
          type="text" 
          value={searchitem}
          placeholder="Search for movies"
          onChange={(e)=> setSearchitem(e.target.value)}
          />
          <img src="./search.png"
          alt="search"
          onClick={ () => searchMovies(searchitem) }
          />
        
        
        </div>
        {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  
  );
};
export default App;
