import 'fontsource-roboto';

import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import * as serviceWorker from './serviceWorker';
import Main from './main';
import theme from './theme';

const queryCache = new QueryCache();

render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ReactQueryCacheProvider queryCache={queryCache}>
      <>
        <Main />
        <ReactQueryDevtools initialIsOpen />
      </>
    </ReactQueryCacheProvider>
  </ThemeProvider>,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
