import React from "react";
import { actors } from "../data";

function Actors() {
  function handleActors(){
    return(
      actors.map((actor)=>{
        return(
          <div key={actor.name}>
            <h3>Name: {actor.name}</h3>
            <span>Movies:
              <ul>
                {actor.movies.map((movie)=>{
                  return(
                    <li key={movie}>{movie}</li>
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
      <h1>Actors Page</h1>
      {handleActors()}
    </div>
  );
}

export default Actors;
