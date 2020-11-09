import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext({});

export default function AuthProvider({ children, initialUser }) {
  const [user, setUser] = useState(initialUser || null);

  const contextValue = useMemo(() => {
    return { user, setUser };
  }, [user]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialUser: PropTypes.object,
};
