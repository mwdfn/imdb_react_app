import React from "react"
import Movie from "./Movie"

const MovieList = ({moviesArray}) => {

    const MovieNodes = moviesArray.map(movie => {
        return(
            <Movie
                key = {movie.id}
                name = {movie.name}
                url = {movie.url}>
            </Movie>
        )  
    })

    return(
        <>
            <h1>TOP 5 UK MOVIES</h1>
            {MovieNodes}     
        </>
    )
}

export default MovieList