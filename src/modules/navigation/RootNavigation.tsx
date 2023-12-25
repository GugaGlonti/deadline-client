import Button from '../../components/Button';
import DEADLINE from '../../components/DEADLINE';
import { AuthService } from '../../services/auth.service';
import NavProfile from './components/NavProfile';
import { NavLink, useNavigate } from 'react-router-dom';

export default function RootNavigation() {
  const navigate = useNavigate();
  const loggedInUser = AuthService.getUser();

  function handleLogout() {
    AuthService.logout();
  }

  return (
    <>
      <nav className={`sticky top-0 z-50 flex items-center justify-between w-full h-24 px-16 bg-gray-900 text-white`}>
        <div>
          <h1>v0.1</h1>
        </div>

        <div>
          {!!loggedInUser && (
            <>
              <NavProfile
                user={loggedInUser}
                onLogout={handleLogout}
              />
            </>
          )}

          {!loggedInUser && (
            <>
              <Button
                onClick={() => navigate('/auth')}
                text='Sign In'
              />
            </>
          )}
        </div>

        <NavLink
          to='/'
          className='flex items-center justify-center absolute right-1/2 translate-x-1/2 tracking-title'>
          <DEADLINE />
        </NavLink>
      </nav>
    </>
  );
}
