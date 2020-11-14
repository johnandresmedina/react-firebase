import React, { createContext, useMemo, useState } from 'react';
import { User } from 'firebase';

type AuthProps = {
  children: React.ReactNode;
  initialUser?: User | null;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children, initialUser }: AuthProps) => {
  const [user, setUser] = useState<User | null>(initialUser || null);

  const contextValue = useMemo(() => ({ user, setUser } as AuthContextType), [user]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
