import { useState } from 'react';
import { auth } from '../config/firebase.config';
import { PrivateRoutesProvider, PublicRoutesProvider } from '../routes';

export default function useAuthBasedRoutes() {
  const [loggedIn, setLoggedIn] = useState(false);

  auth.onAuthStateChanged(user => {
    if (user) setLoggedIn(true);
    else setLoggedIn(false);
  });

  if (loggedIn) {
    return () => <PrivateRoutesProvider />;
  }

  return () => <PublicRoutesProvider />;
}
