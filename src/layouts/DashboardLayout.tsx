import { Outlet } from 'react-router';

export default function DashboardLayout() {
  return (
    <div className='bg-white'>
      <main className='flex'>
        <aside className='flex flex-col items-center justify-around w-64 h-screen p-4 bg-gray-100'>
          <h1>aside stuff</h1>
          <h1>aside stuff</h1>
          <h1>aside stuff</h1>
          <h1>aside stuff</h1>
        </aside>
        <Outlet />
      </main>
    </div>
  );
}
