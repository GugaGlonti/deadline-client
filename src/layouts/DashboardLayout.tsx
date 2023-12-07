import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className='bg-white'>
      <main className='flex'>
        <aside className='flex flex-col items-center justify-around w-64 h-screen p-4 bg-gray-100'>
          <NavLink to=''>
            <h1 className='text-2xl font-bold'>OVERVEIEW</h1>
          </NavLink>
        </aside>
        <Outlet />
      </main>
    </div>
  );
}
