import React from 'react';
import Movieview from './Componets/MovieView';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Auth from './Components/Auth/Auth'
import UpComing from './Componets/UpComing';
import TopRated from './Componets/TopRated';
import { useState, useEffect } from 'react'

function App() {
  const [sessionToken, setSessionToken] = useState('')
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
      console.log(localStorage.getItem('token'));
    }
  }, [])

  console.log(sessionToken);
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log("sessionToken", newToken)
  }

     
  return (

    <div>

      <BrowserRouter>
      <Switch>
      
      <Route path='/' exact render={() =>  <Movieview sessionToken={sessionToken} />} />
      
      <Route path='/Upcoming' exact component={UpComing} />
      <Route path='/TopRated' exact component={TopRated} />
      <Auth updateToken={updateToken}/>
      <Route path='/Auth' exact component={Auth } />
      
      
      </Switch>
    </BrowserRouter>
    

    </div>
  );
}

export default App;