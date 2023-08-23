import axios from 'axios';
import { baseUrl, usersUrl } from '../constants/url';

export const getById = async (_id = '') => {
  const { getById } = usersUrl({ _id });
  const headers = new Headers();
  let response = {};
  try {
    response = await axios.get(`${baseUrl}${getById}`, { withCredentials: true, headers });
  } catch (e) {
    response = { data: {}, error: { message: { text: e.message, type: 'error' } } }; 
  }

  return response;
};

export const updateById = async (_id = '', docs = {}) => {
  const { getById: updateById } = usersUrl({ _id });
  const headers = new Headers();
  let response = {};
  try {
    response = await axios.put(`${baseUrl}${updateById}`, docs, { withCredentials: true, headers });
  } catch (e) {
    response = { data: {}, error: { message: { text: e.message, type: 'error' } } }; 
  }

  return response;
};
