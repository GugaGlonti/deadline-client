import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

interface DashdoardNavItemProps {
  label: string;
  to: string;
  icon: IconType;
  open: boolean;
}

export default function DashdoardNavItem({ label, to, icon: Icon, open, ...props }: DashdoardNavItemProps) {
  const baseClasses = `
  flex justify-start items-center
  rounded-r-full
  

  w-20
  h-20
  
  ${
    !open &&
    `
    rounded-full
    m-2
    `
  }
  ${
    open &&
    `
    my-2
    px-6
    gap-6
    w-5/6
    `
  }
`;

  return (
    <NavLink
      to={to}
      // prettier-ignore
      className={({ isActive }) => (isActive
        ? `${baseClasses} bg-yellow text-white hover:bg-yellow`
        : `${baseClasses} hover:bg-gray-200 hover:text-white`)}
      {...props}>
      <Icon className='w-16 h-16 m-auto' />
      {open && <h1 className='text-md font-bold w-full'>{label}</h1>}
    </NavLink>
  );
}
