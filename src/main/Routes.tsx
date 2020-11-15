import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../layout/Layout';
import PrivateRoute from '../layout/PrivateRoute';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import Dashboard from '../dashboard/Dashboard';
import ProjectDetails from '../projects/ProjectDetails';
import CreateProject from '../projects/CreateProject';

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <PrivateRoute exact path='/'>
            <Dashboard />
          </PrivateRoute>
          <Route path='/signIn'>
            <SignIn />
          </Route>
          <Route path='/signUp'>
            <SignUp />
          </Route>
          <PrivateRoute path='/create'>
            <CreateProject />
          </PrivateRoute>
          <PrivateRoute path='/project/:projectId'>
            <ProjectDetails />
          </PrivateRoute>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
