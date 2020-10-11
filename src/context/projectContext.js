import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import { withThunk } from '../utils/utils';
import projectReducer, { initialState } from '../projects/projectReducer';

export const ProjectContext = createContext({});

export default function ProjectProvider({ children }) {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch: withThunk(dispatch) };
  }, [state, dispatch]);

  return <ProjectContext.Provider value={contextValue}>{children}</ProjectContext.Provider>;
}

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
