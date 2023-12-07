import { useContext } from 'react';
import { authContext } from '../store/auth.context';

export default function useLoggedInUser() {
  const context = useContext(authContext);
  return context.loggedInUser || null;
}
