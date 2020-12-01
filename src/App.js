import React from 'react';
import Movieview from './Componets/MovieView';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import UpComing from './Componets/UpComing';
import TopRated from './Componets/TopRated';
import SignUp from './Componets/SignUp/SignUp';




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
    
    <BrowserRouter>
      <Switch>
      
      <Route path='/' exact component={Movieview} />
      
      <Route path='/Upcoming' exact component={UpComing} />
      <Route path='/TopRated' exact component={TopRated} />
      <Route path='/SignUp' exact component={SignUp} />
      
      </Switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;