<<<<<<< HEAD
import Movieview from './Componets/MovieView';
import Auth from './Components/Auth/Auth'
import { useState } from 'react'

=======
import React from 'react';
import Movieview from './Componets/MovieView';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import UpComing from './Componets/UpComing';
import TopRated from './Componets/TopRated';
import SignUp from './Componets/SignUp/SignUp';
>>>>>>> 3d1e332c9ab40f3bae7b98fa30fdc3451809dfa1




function App() {
  const [token, setToken] = useState(undefined)

  const viewConductor =() => {
    return token === undefined ? <Auth updateToken={updateToken} /> : <Movieview token = {token} />
  }

  const updateToken = (newToken) => {
    setToken(newToken)
  }
    
  return (
<<<<<<< HEAD
    

    <div>
    <button>{viewConductor()}</button>
    <Movieview />
    
      

=======
    <div>
    
    <BrowserRouter>
      <Switch>
      
      <Route path='/' exact component={Movieview} />
      
      <Route path='/Upcoming' exact component={UpComing} />
      <Route path='/TopRated' exact component={TopRated} />
      <Route path='/SignUp' exact component={SignUp} />
      
      </Switch>
    </BrowserRouter>
    
>>>>>>> 3d1e332c9ab40f3bae7b98fa30fdc3451809dfa1
    </div>
  );
}

export default App;