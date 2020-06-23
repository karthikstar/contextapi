import React,{useState, useContext} from 'react';
import {MovieContext} from './MovieContext'

const AddMovie = () => {
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [movies,setMovies] = useContext(MovieContext)

    const updateName = (e) =>{
        setName(e.target.value)
    }
    const updatePrice = (e) =>{
        setPrice(e.target.value)
    }

    const addMovie = e =>{
        e.preventDefault();
        // prevents the page from refreshing when we click on the form
        setMovies(prevMovies => [...prevMovies, {name:name,price:price}])
        // here, we have access to the latest rendered movie list (prevMovies)
        // prevMovies - gives the latest information about the state.
    }
    
    return (
        
        <form onSubmit={addMovie}>
            <input type="text" name="name" value ={name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice}/>
            <button>Submit</button>
        </form>
    )

}

export default AddMovie;