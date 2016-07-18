import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/app';
import Type from './pages/type';
import PokemonList from './pages/pokemon-list';
import Pokemon from './pages/pokemon';

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ PokemonList } />
    <Route path="type/:type" component={ Type } />
    <Route path="pokemon/:pokemon" component={ Pokemon } />
  </Route>
);

export default routes;
