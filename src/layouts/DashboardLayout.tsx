import { Outlet } from 'react-router';

export default function DashboardLayout() {
  return (
    <div className='bg-white'>
      <header
        className={`sticky top-0 z-50
        flex items-center justify-between w-full h-16 px-4 bg-gray-900 text-white
        `}>
        <h1>header stuff</h1>
        <h1>header stuff</h1>
        <h1>header stuff</h1>
      </header>
      <main className='flex'>
        <aside className='flex flex-col items-center justify-between w-64 h-screen p-4 bg-gray-100'>
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
