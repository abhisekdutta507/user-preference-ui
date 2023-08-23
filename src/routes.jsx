import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App, { appLoader } from './App';
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import SignUp, { signupLoader } from './pages/SignUp';
import Login, { loginLoader } from './pages/Login';
import PageNotFound from './PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <App />,
    loader: appLoader,
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
