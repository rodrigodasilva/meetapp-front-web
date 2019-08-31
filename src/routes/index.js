import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SigIn from '~/pages/SignIn';
import SigUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import Details from '~/pages/Details';
import FormMeetup from '~/pages/FormMeetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SigIn} />
      <Route path="/register" component={SigUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/details/:id" component={Details} isPrivate />
      <Route path="/new" component={FormMeetup} isPrivate />
      <Route path="/edit/:id" component={FormMeetup} isPrivate />
    </Switch>
  );
}
