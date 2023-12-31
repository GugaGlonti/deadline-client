import { QueryClient, QueryClientProvider } from 'react-query';

import { auth } from './config/firebase.config';

import useAuthBasedRoutes from './hooks/useAuthBasedRoutes';

const queryClient = new QueryClient();

export default function App() {
  const Routes = useAuthBasedRoutes();

  auth.onAuthStateChanged(async user => {
    if (user) localStorage.setItem('token', await user.getIdToken());
    else localStorage.removeItem('token');
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}
