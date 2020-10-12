import 'fontsource-roboto';

import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import * as serviceWorker from './serviceWorker';
import firebase from './config/firebase';
import AuthProvider from './context/authContext';
import Main from './main';
import theme from './theme';

firebase.auth().onAuthStateChanged(user => {
  render(
    <AuthProvider user={user}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </AuthProvider>,

    document.getElementById('root'),
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
