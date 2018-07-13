import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Colors from "./pages/colors";
import ShowColor from "./pages/colors/show";
import StarWars from "./pages/starwars";
import ShowStarWarsName from "./pages/starwars/show";
import BuzzWords from "./pages/buzzwords";
import ShowBuzzWord from "./pages/buzzwords/show";
import Cookies from "./pages/cookies";
import ShowCookie from "./pages/cookies/show";
import TestWithRouterPage from "./pages/test-withrouter-page";
import Menu from "./pages/menu";

/*
  TODO:  Fix the routes so all list and show pages display
*/

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Menu} />
        <Route path="/colors" component={Colors} />
        <Route path="/colors/:id" component={ShowColor} />
        <Route path="/starwars" component={StarWars} />
        <Route path="/starwars/:id" component={ShowStarWarsName} />
        <Route path="/buzzwords" component={BuzzWords} />
        <Route path="/buzzwords/:id" component={ShowBuzzWord} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/cookie/:id" component={ShowCookie} />
        <Route path="/testwithrouterpage" component={TestWithRouterPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
