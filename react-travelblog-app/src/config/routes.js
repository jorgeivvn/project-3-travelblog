import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Blog from '../Blog';
import Destinations from '../Destinations';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/blog' component={ Blog }/>
    <Route path='/destinations' component={ Destinations }/>
  </Switch>
)
