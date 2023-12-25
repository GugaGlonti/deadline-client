import { QueryClient, QueryClientProvider } from 'react-query';

import useAuthBasedRoutes from './hooks/useAuthBasedRoutes';

const queryClient = new QueryClient();

export default function App() {
  const Routes = useAuthBasedRoutes();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}
