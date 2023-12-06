import { NavLink, RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './store/auth.provider';
import RootLayout from './layouts/RootLayout';
const clientId = '228978164571-bos57od5bbngnosaor9oahtgk425c0tg.apps.googleusercontent.com';

export default function App() {
  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={clientId}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </AuthProvider>
  );
}

const router = createBrowserRouter([
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
            <h1 className='text-white'> GO TO DASHBOARD</h1>
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
            element: <h1>dashboard</h1>,
          },
        ],
      },
    ],
  },
]);

function ErrorBoundary() {
  const error = useRouteError() as Error;
  return <div className='flex justify-center m-32 text-xl'>{error.message}</div>;
}
