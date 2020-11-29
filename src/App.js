import React from 'react';
import Movieview from './Componets/MovieView';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MovieCard from './Componets/MovieCard';



function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
      
      <Route path='/' exact component={Movieview} />
      <Route path='/MovieCard' exact component={MovieCard} />
      
      </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;