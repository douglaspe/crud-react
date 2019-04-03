import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import UserPage from "../components/user/UserPage";

export default () =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserPage} />
        <Redirect from='*' to='/' />
    </Switch>