import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Loader from '../components/Loader';
import Snackbar, { DefaultSnackProps } from '../components/Snackbar';
import { login } from '../services/auth';
import { APIStatus } from '../constants/api';

export const loginLoader = async ({ params, request }) => {
  return { username: '' };
};

const Login = () => {
  const [loginApi, setLoginApi] = useState(APIStatus().default);
  const [snack, modifySnack] = useState({ ...DefaultSnackProps });
  const loginForm = useRef();
  const navigate = useNavigate();

  const handleSnackClose = () => {
    modifySnack({ ...DefaultSnackProps });
  };

  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    setLoginApi(APIStatus().loading);
    const form = loginForm.current;
    const body = {
      username: form.username.value,
      password: form.password.value
    };
    const response = await login(body);
    setLoginApi(APIStatus().completed);
    if (response.error) {
      modifySnack({
        ...DefaultSnackProps,
        open: true,
        severity: 'error',
        message: 'Invalid username or password',
        onClose: handleSnackClose,
      });
      sessionStorage.removeItem('_id');
      return navigate('/login');
    }

    const { data } = response.data;
    const { _id } = data;
    sessionStorage.setItem('_id', _id);

    return navigate('/');
  }, [navigate]);

  return (
    <>
      {
        loginApi.isLoading && <Loader />
      }
      <Snackbar {...snack} />
      <LoginForm
        formId='login'
        formRef={loginForm}
        onSubmit={handleLogin}
        heading='Login'
        buttonLabel='Login'
        linkLabel='Want to create an account?'
        link='/signup'
      />
    </>
  );
};

export default Login;
