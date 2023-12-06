import { Outlet, RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';

export default function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>please log in</h1>,
    errorElement: <ErrorBoundary />,
  },
  {
    path: 'dashboard',
    element: <Outlet />,
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
