import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

type PrivateRouteProps = {
  children: React.ReactNode;
  exact?: boolean;
  path: string;
};

const PrivateRoute = ({ children, ...rest }: PrivateRouteProps) => {
  const authContext = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authContext?.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signIn',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
