import React from 'react';

const Movie =({name,price}) =>{

    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
// we need to wrap the child elements with a overall div
// we can only return one element !


    )
}

export default Movie;

