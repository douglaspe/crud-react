import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/home/Home';
import UserPage from "../components/user/UserPage";

export default () =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserPage} />
        <Route path='/users/:id' component={UserPage} />
    </Switch>