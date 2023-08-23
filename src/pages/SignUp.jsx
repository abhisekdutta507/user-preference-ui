import { useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    <div id="signup" className="flex flex-column">
      <form ref={signupForm} onSubmit={handleSignup}>
        <div>
          <label htmlFor='username'>Username</label>
          <input id='username' name='username' type='text' required />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' name='password' type='password' required />
        </div>
        <div>
          <button type='submit'>Signup</button>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
