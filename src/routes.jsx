import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Redirect, { redirectLoader } from './pages/Redirect';
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import SignUp, { signupLoader } from './pages/SignUp';
import Login, { loginLoader } from './pages/Login';
import PageNotFound from './PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <Redirect />,
    loader: redirectLoader,
    errorElement: <PageNotFound />,
  },
  {
    path: 'dashboard',
    index: true,
    element: <Dashboard />,
    loader: dashboardLoader
  },
  {
    path: 'signup',
    index: true,
    element: <SignUp />,
    loader: signupLoader
  },
  {
    path: 'login',
    index: true,
    element: <Login />,
    loader: loginLoader
  }
]);

export const RoutesWrapper = () => <RouterProvider router={router} />;
