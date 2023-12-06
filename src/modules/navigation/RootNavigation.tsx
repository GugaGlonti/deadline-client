import useGoogleOAuth from '../../hooks/useGoogleOAuth';
import ProfilePicture from '../../components/ProfilePicture';

export default function RootNavigation() {
  const { login, logout, loggedInUser } = useGoogleOAuth();

  return (
    <>
      <nav className={`sticky top-0 z-50 flex items-center justify-between w-full h-24 px-16 bg-gray-900 text-white`}>
        <h1 className='tracking-widest'>DEADLINE</h1>
        <div>
          {loggedInUser && (
            <div className='flex items-center'>
              <h1>{`${loggedInUser.given_name} ${loggedInUser.family_name}`}</h1>
              <ProfilePicture
                src={loggedInUser.picture}
                className='p-1 ml-2 border-2 border-white rounded-full'
              />
              <button onClick={() => logout()}>Logout</button>
            </div>
          )}

          {!loggedInUser && (
            <>
              <button onClick={() => login()}>Login</button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
