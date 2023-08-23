import { useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    <div id="login" className="flex flex-column">
      <form ref={loginForm} onSubmit={handleLogin}>
        <div>
          <label htmlFor='username'>Username</label>
          <input id='username' name='username' type='text' required />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' name='password' type='password' required />
        </div>
        <div>
          <button type='submit'>Login</button>
          <Link to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
