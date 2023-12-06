import { TokenResponse, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../store/auth.context';
import axios from 'axios';
import { GoogleUser } from '../types/User';

export default function useGoogleOAuth() {
  const { setLoggedInUser, loggedInUser } = useContext(authContext);
  const [tokenResponse, setTokenResponse] = useState<TokenResponse>();

  function loginHandler(codeResponse: TokenResponse) {
    setTokenResponse(codeResponse);
    window.location.reload();
  }

  function logout() {
    localStorage.removeItem('access_token');
    setTokenResponse(undefined);
    googleLogout();
    window.location.reload();
  }

  const login = useGoogleLogin({
    onSuccess: loginHandler,
    onError: error => console.log('Login Failed:', error),
  });

  if (tokenResponse) {
    localStorage.setItem('access_token', tokenResponse?.access_token);
  }

  useEffect(() => {
    (async () => {
      const accessToken = localStorage.getItem('access_token');
      if (accessToken) {
        const user = (
          await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: 'application/json',
            },
          })
        ).data as GoogleUser;
        setLoggedInUser(user);
      }
    })();
  }, [setLoggedInUser]);

  return { login, logout, loggedInUser };
}
