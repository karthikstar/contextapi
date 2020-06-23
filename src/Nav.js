import React,{useContext} from 'react';
import './Nav.css'
import {MovieContext} from './MovieContext';


const Nav =() => {
    const [movies,setMovies] = useContext(MovieContext)

    return (
        <div class="navbar">
            <h3 class="navtitle">karthikstar</h3>
            <p class="listtitle">List of Movies: {movies.length}</p>
        </div>
// we need to wrap the child elements with a overall div
// we can only return one element !
    )
}

export default Nav;

