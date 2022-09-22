import React from "react";
import { directors } from "../data";

function Directors() {
  function handleDirectors(){
    return(
      directors.map((director)=>{
        return(
          <div key={director.name}>
            <h3>Name: {director.name}</h3>
            <span>Movies:
              <ul>
                {director.movies.map((movie)=> {
                  return(
                    <li key={movie}>
                      {movie}
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
      <h1>Directors Page</h1>
      {handleDirectors()}

    </div>
  );
}

export default Directors;
