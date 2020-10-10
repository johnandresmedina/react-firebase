import React from 'react';
import { Provider } from 'react-redux';

import configureAppStore from '../store/configureStore';
import ProjectProvider from '../context/projectContext';
import Routes from './Routes';

const Main = () => {
  const store = configureAppStore();

  return (
    <Provider store={store}>
      <ProjectProvider>
        <Routes />
      </ProjectProvider>
    </Provider>
  );
};

export default Main;
