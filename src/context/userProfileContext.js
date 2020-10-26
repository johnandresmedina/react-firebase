import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './authContext';
import { getUserById } from '../auth/userService';

export const UserProfileContext = createContext({});

export default function UserProfileProvider({ children }) {
  const [userProfile, setUserProfile] = useState(null);
  const {
    state: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      const getUserProfile = async () => {
        try {
          const profile = await getUserById(user.uid);
          setUserProfile(profile);
        } catch (error) {
          //ignore for now
        }
      };

      getUserProfile();
    }
  }, [user]);

  return <UserProfileContext.Provider value={userProfile}>{children}</UserProfileContext.Provider>;
}

UserProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
