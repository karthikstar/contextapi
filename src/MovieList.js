import React,{ useState, useContext } from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext'

const MovieList =() =>{
        const [movies, setMovies] = useContext(MovieContext)
        return (
        
        <div>
            {movies.map(movie => (
                <Movie name= {movie.name} price = {movie.price} key= {movie.id}/>
            ))}

        </div>
// we need to wrap the child elements with a overall div
// we can only return one element !
// each child in a list shld have a unique key. hence to resolve this error pass in a key prop to the component.

    )
}

// how do we pass the movies and their information to the movie component?
// thru PROPS!

export default MovieList
