import React from "react";
import { movies } from "../data";

function Movies() {
  function handleMovies(){
    return (
      movies.map((movie)=> {
        return(
          <div key={movie.title}>
            <h3>Name: {movie.title}</h3>
            <p>Time: {movie.time}</p>
            <span>Genres:
              <ul>
                {movie.genres.map((genre)=>{
                  return (
                    <li key={genre}>
                      {genre}
                    </li>
                  )
                })}
              </ul>
            </span>
          </div>
        )
      })
    )
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {handleMovies()}
    </div>
    
  );
}

export default Movies;
