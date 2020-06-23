import React,{useState,createContext} from 'react';
// to initiate context,
export const MovieContext = createContext();
// we need to import this ^ so that we can use it in diff components.
// movieprovider's job is basically to hold some info, and then pass it down to all the diff components that we want .to. 

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name:'Harry Potter',
            price:'$10',
            id : 23124
        },
        {
            name:'Game of Thrones',
            price:'$10',
            id: 2566124
        },
        {
            name:'Inception',
            price:'$10',
            id:23524
        }
    ])

    return(
        <MovieContext.Provider value= {[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );

}

// this movieprovider is providing the info to the small components that are wrapped by MovieContext.Provider




// not export default as we need to export two items !