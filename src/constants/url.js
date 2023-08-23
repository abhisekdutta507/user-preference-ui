export const urlVersion = '/v1';
export const baseUrl = `https://user-preference-api-6f803dd8c244.herokuapp.com/api${urlVersion}`;
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
