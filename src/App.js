
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
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken)
  }

  // const [token, setToken] = useState(undefined)

  // const viewConductor =() => {
  //   return token === undefined ? <Auth updateToken={updateToken} /> : <Movieview token = {token} />
  // }

  // const updateToken = (newToken) => {
  //   setToken(newToken)
  // }
    
  return (

    <div>

    
  {/* <Auth updateToken={updateToken}/> */}
    <BrowserRouter>
      <Switch>
      
      <Route path='/' exact component={Movieview} />
      
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