import { NavLink } from 'react-router-dom';

interface DropdownItemProps {
  text: string;
}
export default function DropdownItem({ text, ...props }: DropdownItemProps) {
  return (
    <li {...props}>
      <NavLink
        to={`/${text.toLowerCase()}`}
        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
        {text}
      </NavLink>
    </li>
  );
}
