import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../layout';
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
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/signIn'>
            <SignIn />
          </Route>
          <Route path='/signUp'>
            <SignUp />
          </Route>
          <Route path='/create'>
            <CreateProject />
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
