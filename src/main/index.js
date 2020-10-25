import React, { useState, useEffect } from 'react';

import AuthProvider from '../context/authContext';
import firebase from '../config/firebase';
import ProjectProvider from '../context/projectContext';
import Routes from './Routes';

const Main = () => {
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      setLoaded(true);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {loaded ? (
        <AuthProvider user={user}>
          <ProjectProvider>
            <Routes />
          </ProjectProvider>
        </AuthProvider>
      ) : null}
    </>
  );
};

export default Main;
