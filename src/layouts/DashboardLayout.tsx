import { Outlet } from 'react-router';
import DashboardNav from '../modules/dashboard/DashboardNav';

export default function DashboardLayout() {
  return (
    <div className='bg-white flex'>
      <DashboardNav />
      <Outlet />
    </div>
  );
}
