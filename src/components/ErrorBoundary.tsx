import { useRouteError } from 'react-router-dom';

export function ErrorBoundary() {
  const error = useRouteError() as Error;
  return <div className='flex justify-center m-32 text-xl'>{error.message}</div>;
}
