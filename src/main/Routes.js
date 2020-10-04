import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../layout';
import SignIn from '../auth/SignIn';
import Dashboard from '../dashboard/Dashboard';
import ProjectDetails from '../projects/ProjectDetails';

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/signIn'>
            <SignIn />
          </Route>
          <Route path='/project/:id'>
            <ProjectDetails />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
