import React, { createContext, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

import { withThunk } from '../utils/utils';
import authReducer, { initialState } from '../auth/authReducer';

export const AuthContext = createContext({});

const init = user => stateCommingFromReducer => {
  let initState = stateCommingFromReducer;
  if (user) {
    initState = {
      status: 'resolved',
      user: user,
      authError: null,
    };
  }

  return initState;
};

export default function AuthProvider({ children, user }) {
  const [state, dispatch] = useReducer(authReducer, initialState, init(user));

  const contextValue = useMemo(() => {
    return { state, dispatch: withThunk(dispatch) };
  }, [state, dispatch]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.object,
};
