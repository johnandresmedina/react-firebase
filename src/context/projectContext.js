import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import projectReducer, { initialState } from '../projects/projectReducer';

export const ProjectContext = createContext({});

const withThunk = dispatch => actionOrThunk =>
  typeof actionOrThunk === 'function' ? actionOrThunk(dispatch) : dispatch(actionOrThunk);

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
