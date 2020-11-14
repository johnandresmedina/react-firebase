import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './authContext';
import { getUserById, UserProfileType } from '../auth/userService';

type UserProfileProviderProps = {
  children: React.ReactNode;
};

export const UserProfileContext = createContext<UserProfileType | null>(null);

const UserProfileProvider = ({ children }: UserProfileProviderProps) => {
  const [userProfile, setUserProfile] = useState<UserProfileType | null>(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext?.user) {
      const getUserProfile = async () => {
        try {
          const profile = await getUserById(authContext.user?.uid);
          setUserProfile(profile);
        } catch (error) {
          //ignore for now
        }
      };

      getUserProfile();
    }
  }, [authContext?.user]);

  return <UserProfileContext.Provider value={userProfile}>{children}</UserProfileContext.Provider>;
};

export default UserProfileProvider;
