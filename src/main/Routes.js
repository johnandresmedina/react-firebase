import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../layout';
import App from '../app';
import About from '../about';

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
