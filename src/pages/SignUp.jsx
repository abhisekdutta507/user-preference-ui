import { useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, Input, Button, Typography } from '@mui/material';
import { signup } from '../services/auth';

export const signupLoader = async ({ params, request }) => {
  return { username: '' };
};

const SignUp = () => {
  const signupForm = useRef();
  const navigate = useNavigate();

  const handleSignup = useCallback(async (event) => {
    event.preventDefault();
    const form = signupForm.current;
    const body = {
      username: form.username.value,
      password: form.password.value,
      preference: {}
    };
    const response = await signup(body);
    if (response?.error) {
      sessionStorage.removeItem('_id');
      sessionStorage.removeItem('username');
      return;
    }

    const { data } = response.data;
    const { _id, username } = data;
    sessionStorage.setItem('_id', _id);
    sessionStorage.setItem('username', username);

    return navigate('/');
  }, [navigate]);

  return (
    <Box id="signup" className='form-ui'>
      <Card className='login-card'>
        <Box className='form-row'>
          <Typography variant='h5'>Signup</Typography>
        </Box>
        <form ref={signupForm} onSubmit={handleSignup}>
          <Box className='form-row form-row-input'>
            <label htmlFor='username'>Username</label>
            <Input id='username' name='username' type='text' required />
          </Box>
          <Box className='form-row form-row-input'>
            <label htmlFor='password'>Password</label>
            <Input id='password' name='password' type='password' required />
          </Box>
          <Box className='form-row form-row-action'>
            <Button type='submit' variant='outlined'>Signup</Button>
            <Link className='form-row-action-absolute' to="/login">Already have an account?</Link>
          </Box>
        </form>
      </Card>
    </Box>
  );
};

export default SignUp;
