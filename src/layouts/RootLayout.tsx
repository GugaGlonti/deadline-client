import { Outlet } from 'react-router';

import RootNavigation from '../modules/navigation/RootNavigation';
import RootFooter from '../modules/footer/RootFooter';

export default function RootLayout() {
  return (
    <>
      <RootNavigation />
      <Outlet />
      <RootFooter />
    </>
  );
}
