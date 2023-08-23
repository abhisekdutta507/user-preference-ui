import { redirect } from 'react-router-dom';

export const redirectLoader = () => {
  return redirect('/dashboard');
};

export const Redirect = () => {
  return <div>Redirect</div>;
}

export default Redirect;
