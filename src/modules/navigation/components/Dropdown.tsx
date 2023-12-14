import { User } from 'firebase/auth';

import Button from '../../../components/Button';
import DropdownItem from './DropdownItem';

interface DropdownProps {
  user: User;
  logout: () => void;
}

export default function Dropdown({ user, logout, ...props }: DropdownProps) {
  return (
    <div
      className={`absolute p-2 bg-gray-800 right-0 rounded-md align-middle divide-y`}
      {...props}>
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
        className='min-w-full rounded-none'
        onClick={() => logout()}
        text='Sign Out'
      />
    </div>
  );
}
