import { FC, ReactNode, useCallback, useState } from 'react';

import { GoogleUser } from '../types/User';
import { AuthContext, authContext } from './auth.context';

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<GoogleUser | null>(null);
  const setLoggedInUser = useCallback((user: GoogleUser | null) => setUser(user), [setUser]);

  const authContextValues: AuthContext = {
    loggedInUser: user,
    setLoggedInUser,
    isLoggedIn: !!user,
  };

  return <authContext.Provider value={authContextValues}>{children}</authContext.Provider>;
};
