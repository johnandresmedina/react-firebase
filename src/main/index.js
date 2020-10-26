import React, { useState, useEffect } from 'react';

import AuthProvider from '../context/authContext';
import firebase from '../config/firebase';
import ProjectProvider from '../context/projectContext';
import Routes from './Routes';
import UserProfileProvider from '../context/userProfileContext';

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
          <UserProfileProvider>
            <ProjectProvider>
              <Routes />
            </ProjectProvider>
          </UserProfileProvider>
        </AuthProvider>
      ) : null}
    </>
  );
};

export default Main;
