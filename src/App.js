import React from 'react';
import './App.css';
import Nav from './Nav'
import MovieList from './MovieList'
import AddMovie from './AddMovie'
import {MovieProvider} from './MovieContext'
// since we are not using export default in moviecontext.js as we hav ae 2 items, so we need make sure to use curly braces - destructuring syntax to jjust get MovieProvider


function App() {

  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <AddMovie/>
        <MovieList/>
      </div>
    </MovieProvider>
  );
}

export default App;

// we are rendering a nav and a movielist, they have nth to do w each other
// however, here i want to render the number of items in movielist, in the nav. but we cant do that as we can only pass props.
// the only way to pass state to components is thru props.
// so one way would be to lift up the state, aka take the state obj in the movielist to app.js instead, and pass down state as props to both nav and movielist
// prob is we will end up having a lot of state in the app component whioch doesnt belong to the app component

// we will end up doing prop drilling - passing down props all the way down to the desired component
// eg take movies pass down to movielist, then movielist passes down again to movie 
// so we WONT use this method. 

// instead use state management - context API - check out MovieContext.js to see how a context is created
// can check out Nav.js and Movielist.js to see how they imported the context and used it.


// context API is good when we want to just render out information eg movies.length 
// all the comps that use the context which is updated, will re-render.
