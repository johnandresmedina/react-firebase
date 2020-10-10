import React from 'react';

import ProjectProvider from '../context/projectContext';
import Routes from './Routes';

const Main = () => {
  return (
    <ProjectProvider>
      <Routes />
    </ProjectProvider>
  );
};

export default Main;
