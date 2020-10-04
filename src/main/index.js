import React from 'react';
import { Provider } from 'react-redux';

import configureAppStore from '../store/configureStore';
import Routes from './Routes';

const Main = () => {
  const store = configureAppStore();

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default Main;
