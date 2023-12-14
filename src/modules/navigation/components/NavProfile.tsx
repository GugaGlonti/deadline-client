import { useState } from 'react';

import { User } from 'firebase/auth';

import ProfilePicture from '../../../components/ProfilePicture';
import Dropdown from './Dropdown';

interface NavProfileProps {
  user: User;
  onLogout: () => void;
}

export default function NavProfile({ user, onLogout: logout, ...props }: NavProfileProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <div
      className={`relative bg-gray-800 py-1 px-4 rounded-md hover:bg-gray-700`}
      onClick={toggleDropdown}
      onMouseLeave={closeDropdown}
      {...props}>
      <div className='flex items-center'>
        <h1>{`${user.displayName}`}</h1>
        <ProfilePicture
          src={user.photoURL || ''}
          className='p-1 ml-2 border-2 border-white rounded-full'
        />
      </div>
      {!!isDropdownOpen && (
        <Dropdown
          user={user}
          logout={logout}
        />
      )}
    </div>
  );
}
