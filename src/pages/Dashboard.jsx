import { redirect, useLoaderData } from 'react-router-dom';
import * as usersService from '../services/users';
import './Dashboard.scss';

export const dashboardLoader = async ({ params, request }) => {
  const _id = sessionStorage.getItem('_id')
  if (!_id?.length) {
    return redirect('/login');
  }

  const response = await usersService.getById(_id);
  if (response.error) {
    sessionStorage.removeItem('_id');
    sessionStorage.removeItem('username');
    return redirect('/login');
  }

  const { data } = response.data;

  return data;
};

function Dashbaord() {
  const user = useLoaderData();
  console.log('user', user);

  return (
    <div className="App">
      Dashbaord screen...
    </div>
  );
}

export default Dashbaord;
