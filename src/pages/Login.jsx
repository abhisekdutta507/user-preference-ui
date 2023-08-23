import { useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, Input, Button, Typography } from '@mui/material';

import { login } from '../services/auth';

export const loginLoader = async ({ params, request }) => {
  return { username: '' };
};

const Login = () => {
  const loginForm = useRef();
  const navigate = useNavigate();

  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    const form = loginForm.current;
    const body = {
      username: form.username.value,
      password: form.password.value
    };
    const response = await login(body);
    if (response.error) {
      sessionStorage.removeItem('_id');
      sessionStorage.removeItem('username');
      return navigate('/login');
    }

    const { data } = response.data;
    const { _id, username } = data;
    sessionStorage.setItem('_id', _id);
    sessionStorage.setItem('username', username);

    return navigate('/');
  }, [navigate]);

  return (
    <Box id='login' className='form-ui'>
      <Card className='login-card'>
        <Typography variant='h5'>Login</Typography>
        <form ref={loginForm} onSubmit={handleLogin}>
          <Box className='form-row form-row-input'>
            <label htmlFor='username'>Username</label>
            <Input id='username' name='username' type='text' required />
          </Box>
          <Box className='form-row form-row-input'>
            <label htmlFor='password'>Password</label>
            <Input id='password' name='password' type='password' required />
          </Box>
          <Box className='form-row form-row-action'>
            <Button type='submit' variant='outlined'>Login</Button>
            <Link className='form-row-action-absolute' to="/signup">Want to create an account?</Link>
          </Box>
        </form>
      </Card>
    </Box>
  );
};

export default Login;
