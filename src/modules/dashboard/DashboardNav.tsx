import { IoMenu } from 'react-icons/io5';
import { LuListTodo } from 'react-icons/lu';
import { MdTaskAlt } from 'react-icons/md';
import { IoCalendarNumberOutline } from 'react-icons/io5';

import { useState } from 'react';
import DashdoardNavItem from './components/DashdoardNavItem';

export default function DashboardNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <aside
      className={`
      transition-all duration-200
      h-screen bg-gray-100
      ${isMenuOpen ? 'w-1/4' : 'w-24'}
      `}>
      <div onClick={() => setIsMenuOpen(prev => !prev)}>
        <IoMenu
          className={`
          p-4 w-24 h-24
          `}
        />
      </div>

      <nav className='flex flex-col gap-16 mt-16'>
        <DashdoardNavItem
          icon={LuListTodo}
          label='Main'
          to='main'
          open={isMenuOpen}
        />

        <DashdoardNavItem
          icon={MdTaskAlt}
          label='Completed'
          to='completed'
          open={isMenuOpen}
        />

        <DashdoardNavItem
          icon={IoCalendarNumberOutline}
          label='Past Deadlines'
          to='past'
          open={isMenuOpen}
        />
      </nav>
    </aside>
  );
}
