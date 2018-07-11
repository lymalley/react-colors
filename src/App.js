import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import ShowColor from './pages/colors/show'

import ShowStarWarsName from './pages/starwars/show'
import ShowBuzzWord from './pages/buzzwords/show'
import Cookies from './pages/cookies'
import TestWithRouterPage from './pages/test-withrouter-page';
import Menu from './pages/menu'

/*
  TODO:  Fix the routes so all list and show pages display
*/


const App = props => {
  return (
    <BrowserRouter>
          <Route path="/" component={Menu} />
          <Route path="/colors" component={Colors} />
          <Route path="/colors/" component={ShowColor} />
          <Route path="/starwars" component={StarWars} />
          <Route path="/starwars/" component={ShowStarWarsName} />
          <Route path="/buzzwords" component={BuzzWords} />
          <Route path="/buzzwords/" component={ShowBuzzWord} />
          <Route path="/cookies" component={Cookies} />
          <Route path="/cookie" component={ShowCookie} />
          <Route path="/testwithrouterpage" component={TestWithRouterPage} />
    </BrowserRouter>
  )
}

export default App

