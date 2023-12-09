import { NavLink } from 'react-router-dom';

import { IconType } from 'react-icons';
interface DashdoardNavItemProps {
  label: string;
  to: string;
  icon: IconType;
  open: boolean;
}

export default function DashdoardNavItem({ label, to, icon: Icon, open, ...props }: DashdoardNavItemProps) {
  const baseClasses = `
  flex justify-start items-center
  relative
  m-2
  transition-all duration-150
  h-20
  
  ${
    !open &&
    `
    rounded-full
    w-20
    `
  }
  ${
    open &&
    `
    rounded-r-full
    w-5/6
    `
  }
`;

  return (
    <NavLink
      to={to}
      // prettier-ignore
      className={({ isActive }) => {
        return (isActive
          ? `${baseClasses} bg-yellow text-white hover:bg-yellow hover:text-white`
          : `${baseClasses} hover:bg-gray-200 hover:text-white`)
      }}
      {...props}>
      {!!open && <div className='absolute left-0 w-1 h-20 bg-yellow' />}
      <div className='h-20'>
        <Icon className='p-6 w-20 h-20 absolute left-0' />
      </div>
      {open && <h1 className='ml-24 text-md font-bold w-full'>{label}</h1>}
    </NavLink>
  );
}
