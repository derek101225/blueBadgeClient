import Movieview from './Componets/MovieView';
import Auth from './Components/Auth/Auth'
import { useState } from 'react'
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UpComing from './Componets/UpComing';
import TopRated from './Componets/TopRated';





function App() {
  const [token, setToken] = useState(undefined)

  const viewConductor =() => {
    return token === undefined ? <Auth updateToken={updateToken} /> : <Movieview token = {token} />
  }

  const updateToken = (newToken) => {
    setToken(newToken)
  }
    
  return (

    <div>
    <button>{viewConductor()}</button>
    <BrowserRouter>
      <Switch>
      
      <Route path='/' exact component={Movieview} />
      <Route path='/Upcoming' exact component={UpComing} />
      <Route path='/TopRated' exact component={TopRated} />
      
      
      </Switch>
    </BrowserRouter>
    

    </div>
  );
}

export default App;