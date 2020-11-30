import Movieview from './Componets/MovieView';
import Auth from './Components/Auth/Auth'
import { useState } from 'react'





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
    <Movieview />
    
      

    </div>
  );
}

export default App;