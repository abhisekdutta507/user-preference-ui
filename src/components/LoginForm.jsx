import { Box, Card, Input, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const LoginForm = ({
  formId = '',
  formRef,
  onSubmit: handleSubmit,
  heading = '',
  buttonLabel = '',
  linkLabel = '',
  link = ''
}) => {
  return (
    <Box id={formId} className='form-ui'>
      <Card className='login-card'>
        <Typography variant='h5'>{heading}</Typography>
        <form ref={formRef} onSubmit={handleSubmit}>
          <Box className='form-row form-row-input'>
            <label htmlFor='username'>Username</label>
            <Input autoComplete='username' id='username' name='username' type='text' required />
          </Box>
          <Box className='form-row form-row-input'>
            <label htmlFor='password'>Password</label>
            <Input autoComplete='password' id='password' name='password' type='password' required />
          </Box>
          <Box className='form-row form-row-action'>
            <Button type='submit' variant='outlined'>{buttonLabel}</Button>
            <Link className='form-row-action-absolute' to={link}>{linkLabel}</Link>
          </Box>
        </form>
      </Card>
    </Box>
  );
};

export default LoginForm;
