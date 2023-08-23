export const urlVersion = '/v1';
export const baseUrl = `http://localhost:3001/api${urlVersion}`;
export const usersUrl = ({
  _id = ''
}) => ({
  getById: `/users/${_id}`,
  all: '/users'
});
export const authUrl = () => ({
  login: '/login',
  signup: '/signup'
});
