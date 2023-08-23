import axios from 'axios';
import { baseUrl, usersUrl } from '../constants/url';

export const getById = async (_id = '') => {
  const { getById } = usersUrl({ _id });
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let response = {};
  try {
    response = await axios.get(`${baseUrl}${getById}`, { withCredentials: true, headers });
  } catch (e) {
    response = { data: {}, error: { message: { text: e.message, type: 'error' } } }; 
  }

  return response;
};
