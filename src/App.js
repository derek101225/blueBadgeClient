import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movieview from "./Components/MovieView";
import Auth from "./Components/Auth/Auth";
import UpComing from "./Components/UpComing";
import TopRated from "./Components/TopRated";
import SignUp from "./Components/SignUp";

function App() {
  const [sessionToken, setSessionToken] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  // const [token, setToken] = useState(undefined)

  // const viewConductor =() => {
  //   return token === undefined ? <Auth updateToken={updateToken} /> : <Movieview token = {token} />
  // }

  // const updateToken = (newToken) => {
  //   setToken(newToken)
  // }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Movieview} />
          <Route path="/Upcoming" exact component={UpComing} />
          <Route path="/TopRated" exact component={TopRated} />
          <Auth updateToken={updateToken} />
          <Route path="/Auth" exact component={Auth} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
