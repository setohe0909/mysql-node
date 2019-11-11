import React, { Fragment } from 'react';

// Import routing components
import { Route, Switch } from 'react-router-dom';

// Import custom components
import MainLayout from '../components/common/layout/MainLayout';
import NotFound from '../components/error/NotFound';
import LoginForm from '../containers/auth/LoginContainer';
import SignUpForm from '../containers/auth/SignUpContainer';
import Dashboard from '../containers/dashboard/DashboardContainer';
import User from '../containers/users/UserContainer';
import Client from '../containers/client/ClientContainer';

import PrivateRoute from './PrivateRoute';
import RestrictRoute from './RestrictRoute';

const Router = () => (
  <Fragment>
    <Switch>
      <RestrictRoute exact path="/" component={LoginForm} />
      <RestrictRoute path="/signup" component={SignUpForm} />

      <MainLayout>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/users" component={User} />
          <PrivateRoute path="/clients" component={Client} />
        </Switch>
      </MainLayout>

      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Router;
