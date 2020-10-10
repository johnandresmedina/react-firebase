import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ProjectContext = createContext([]);

export default function ProjectProvider({ children }) {
  const [projects] = useState([
    { id: 1, title: 'Title 1', content: 'Content 1' },
    { id: 2, title: 'Title 2', content: 'Content 2' },
    { id: 3, title: 'Title 3', content: 'Content 3' },
  ]);

  return <ProjectContext.Provider value={projects}>{children}</ProjectContext.Provider>;
}

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
