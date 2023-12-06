import { Outlet } from 'react-router';
import { TokenResponse, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function DashboardLayout() {
  const [user, setUser] = useState<TokenResponse>();
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse: TokenResponse) => setUser(codeResponse),
    onError: error => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, { headers: { Authorization: `Bearer ${user.access_token}`, Accept: 'application/json' } })
        .then(res => setProfile(res.data))
        .catch(err => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  console.log('profile', profile);

  return (
    <div className='bg-white'>
      <header
        className={`sticky top-0 z-50
        flex items-center justify-between w-full h-16 px-16 bg-gray-900 text-white
        `}>
        <h1 className='tracking-widest'>D E A D L I N E</h1>
        <div>{profile ? <button onClick={() => logOut()}>Logout</button> : <button onClick={() => login()}>Login</button>}</div>
      </header>
      <main className='flex'>
        <aside className='flex flex-col items-center justify-around w-64 h-screen p-4 bg-gray-100'>
          <h1>aside stuff</h1>
          <h1>aside stuff</h1>
          <h1>aside stuff</h1>
          <h1>aside stuff</h1>
        </aside>
        <Outlet />
      </main>
    </div>
  );
}
