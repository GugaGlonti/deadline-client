import DashboardLayout from './layouts/DashboardLayout';
import RootLayout from './layouts/RootLayout';
import { ErrorBoundary } from './components/ErrorBoundary';
import Dashboard from './modules/dashboard/Dashboard';
import Landing from './modules/landing/Landing';
import AuthPage from './modules/auth/AuthPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const privateRoutes = [
  {
    path: '/',
    id: 'root',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '', id: 'root-root', element: <Landing /> },
      {
        path: 'dashboard',
        id: 'dashboard',
        element: <DashboardLayout />,
        children: [
          { path: '', id: 'dashboard-root', element: <Dashboard /> },
          { path: 'main', id: 'dashboard-main', element: <Dashboard /> },
          { path: 'past', id: 'dashboard-past', element: <Dashboard /> },
          { path: 'completed', id: 'dashboard-completed', element: <Dashboard /> },
        ],
      },
      { path: 'settings', id: 'settings', element: <h1 className='text-center text-white'>settings</h1> },
      { path: 'about', id: 'about', element: <h1 className='text-center text-white'>about</h1> },
    ],
  },
  { path: 'auth', id: 'auth', element: <AuthPage /> },
  { path: '*', id: 'not-found', element: <h1 className='text-center text-white text-9xl'>ROUTE IS NOT DEFINED</h1> },
];

const publicRoutes = [
  {
    path: '/',
    id: 'root',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '', id: 'root-root', element: <Landing /> },
      { path: 'about', id: 'about', element: <h1 className='text-center text-white'>about</h1> },
    ],
  },
  {
    path: '*',
    id: 'auth',
    element: <AuthPage />,
  },
];

export function PublicRoutesProvider() {
  return <RouterProvider router={createBrowserRouter(publicRoutes)} />;
}

export function PrivateRoutesProvider() {
  return <RouterProvider router={createBrowserRouter(privateRoutes)} />;
}
