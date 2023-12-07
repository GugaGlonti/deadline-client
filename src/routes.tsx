import { NavLink } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import RootLayout from './layouts/RootLayout';
import { ErrorBoundary } from './components/ErrorBoundary';
import Dashboard from './modules/dashboard/Dashboard';

export const routes = [
  {
    path: '/',
    id: 'root',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '',
        id: 'root-root',
        element: (
          <NavLink to='dashboard'>
            <h1 className='text-white'>GO TO DASHBOARD</h1>
          </NavLink>
        ),
      },
      {
        path: 'dashboard',
        id: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            path: '',
            id: 'dashboard-root',
            element: <Dashboard />,
          },
        ],
      },
      {
        path: 'settings',
        id: 'settings',
        element: <h1 className='text-center text-white'>settings</h1>,
      },
      {
        path: 'about',
        id: 'about',
        element: <h1 className='text-center text-white'>about</h1>,
      },
      {
        path: '*',
        id: 'not-found',
        element: <h1 className='text-center text-white'>404</h1>,
      },
    ],
  },
];
