import React, { useState, useEffect } from 'react';

import AuthProvider from '../context/authContext';
import firebase from '../config/firebase';
import Routes from './Routes';
import UserProfileProvider from '../context/userProfileContext';

const Main = () => {
  const [initialUser, setInitialUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setInitialUser(user);
      }

      setLoaded(true);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {loaded ? (
        <AuthProvider initialUser={initialUser}>
          <UserProfileProvider>
            <Routes />
          </UserProfileProvider>
        </AuthProvider>
      ) : null}
    </>
  );
};

export default Main;
