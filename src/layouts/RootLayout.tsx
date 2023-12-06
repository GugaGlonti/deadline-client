import { Outlet } from 'react-router';
import RootNavigation from '../modules/navigation/RootNavigation';

export default function RootLayout() {
  return (
    <>
      <RootNavigation />
      <Outlet />
    </>
  );
}
