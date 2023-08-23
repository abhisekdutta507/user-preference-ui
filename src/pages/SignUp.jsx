import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Loader from '../components/Loader';
import Snackbar, { DefaultSnackProps } from '../components/Snackbar';
import { signup } from '../services/auth';
import { APIStatus } from '../constants/api';

export const signupLoader = async ({ params, request }) => {
  return { username: '' };
};

const SignUp = () => {
  const [snack, modifySnack] = useState({ ...DefaultSnackProps });
  const [signupApi, setSignupApi] = useState(APIStatus().default);
  const signupForm = useRef();
  const navigate = useNavigate();

  const handleSnackClose = () => {
    modifySnack({ ...DefaultSnackProps });
  };

  const handleSignup = useCallback(async (event) => {
    event.preventDefault();
    setSignupApi(APIStatus().loading);
    const form = signupForm.current;
    const body = {
      username: form.username.value,
      password: form.password.value,
      preference: {}
    };
    const response = await signup(body);
    setSignupApi(APIStatus().completed);
    if (response?.error) {
      modifySnack({
        ...DefaultSnackProps,
        open: true,
        severity: 'error',
        message: response.error.message.text,
        onClose: handleSnackClose,
      });
      sessionStorage.removeItem('_id');
      return;
    }

    const { data } = response.data;
    const { _id } = data;
    sessionStorage.setItem('_id', _id);

    return navigate('/');
  }, [navigate]);

  return (
    <>
      {
        signupApi.isLoading && <Loader />
      }
      <Snackbar {...snack} />
      <LoginForm
        formId='signup'
        formRef={signupForm}
        onSubmit={handleSignup}
        heading='Signup'
        buttonLabel='Signup'
        linkLabel='Already have an account?'
        link='/login'
      />
    </>
  );
};

export default SignUp;
