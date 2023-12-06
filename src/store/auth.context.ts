import { createContext } from 'react';
import { GoogleUser } from '../types/User';

export interface AuthContext {
  loggedInUser: GoogleUser | null;
  setLoggedInUser: (user: GoogleUser | null) => void;
  isLoggedIn: boolean;
}

export const authContext = createContext<AuthContext>({
  loggedInUser: null,
  setLoggedInUser: () => {},
  isLoggedIn: false,
});
