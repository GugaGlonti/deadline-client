import { NavLink, RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';

export default function App() {
  return <RouterProvider router={router} />;
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
