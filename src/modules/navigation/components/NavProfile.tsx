import { useState } from 'react';
import ProfilePicture from '../../../components/ProfilePicture';
import { GoogleUser } from '../../../types/User';
import Button from '../../../components/Button';
import { DropdownItem } from './DropdownItem';

interface NavProfileProps {
  user: GoogleUser;
  onLogout: () => void;
}

export default function NavProfile({ user, onLogout: logout, ...props }: NavProfileProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className={`relative
      bg-gray-800 py-1 px-4 rounded-md
      hover:bg-gray-700`}
      onClick={() => setIsDropdownOpen(prev => !prev)}
      {...props}>
      <div className='flex items-center'>
        <h1>{`${user.given_name} ${user.family_name}`}</h1>
        <ProfilePicture
          src={user.picture}
          className='p-1 ml-2 border-2 border-white rounded-full'
        />
      </div>
      {!!isDropdownOpen && (
        <div
          className={`absolute p-2 bg-gray-800 right-0
          flex flex-col divide-y`}>
          <div className='px-4 py-3'>
            <span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>{user.email}</span>
          </div>
          <ul
            className='py-2'
            aria-labelledby='user-menu-button'>
            <DropdownItem text='Dashboard' />
            <DropdownItem text='Settings' />
            <DropdownItem text='About' />
          </ul>
          <Button
            onClick={() => logout()}
            text='Logout'
          />
        </div>
      )}
    </div>
  );
}
