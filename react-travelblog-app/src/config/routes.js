import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Blog from '../Blog';
import Destinations from '../Destinations';
import Login from '../Login';
import Logout from '../Logout';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/blog' component={ Blog }/>
    <Route path='/destinations' component={ Destinations }/>
    <Route path='/login' component={ Login }/>
    <Route path='/logout' component={ Logout }/>
  </Switch>
)
