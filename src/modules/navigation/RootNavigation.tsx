import useGoogleOAuth from '../../hooks/useGoogleOAuth';
import Button from '../../components/Button';
import NavProfile from './components/NavProfile';

export default function RootNavigation() {
  const { login, logout, loggedInUser } = useGoogleOAuth();

  return (
    <>
      <nav className={`sticky top-0 z-50 flex items-center justify-between w-full h-24 px-16 bg-gray-900 text-white`}>
        <div>
          <h1>v0.1</h1>
        </div>

        <div>
          {loggedInUser && (
            <>
              <NavProfile
                user={loggedInUser}
                onLogout={logout}
              />
            </>
          )}

          {!loggedInUser && (
            <>
              <Button
                onClick={login}
                text='LogIn'
              />
            </>
          )}
        </div>

        <h1 className='flex items-center justify-center absolute right-1/2 translate-x-1/2 tracking-title'>DEADLINE</h1>
      </nav>
    </>
  );
}
