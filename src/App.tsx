import { NavLink, RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId = '228978164571-bos57od5bbngnosaor9oahtgk425c0tg.apps.googleusercontent.com';

export default function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className='flex justify-center mt-32'>
        <h1>please log in</h1>
        <NavLink
          className='bg-red-400'
          to='/dashboard'>
          LogIn
        </NavLink>
      </div>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <h1>dashboard</h1>,
      },
    ],
  },
]);

function ErrorBoundary() {
  const error = useRouteError() as Error;
  return <div className='flex justify-center m-32 text-xl'>{error.message}</div>;
}
