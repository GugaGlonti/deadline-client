import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './store/auth.provider';
import { routes } from './routes';
const clientId = '228978164571-bos57od5bbngnosaor9oahtgk425c0tg.apps.googleusercontent.com';

export default function App() {
  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={clientId}>
        <RouterProvider router={createBrowserRouter(routes)} />
      </GoogleOAuthProvider>
    </AuthProvider>
  );
}
