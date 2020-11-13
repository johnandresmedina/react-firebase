import 'fontsource-roboto';

import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

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
