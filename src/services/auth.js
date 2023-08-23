import axios from 'axios';
import { baseUrl, authUrl } from '../constants/url';

export const login = async (body = {}) => {
  const { login } = authUrl({});

  const headers = new Headers();
  let response = {};
  try {
    response = await axios.post(`${baseUrl}${login}`, body, { withCredentials: true, headers });
  } catch (e) {
    response = { data: {}, error: { message: { text: e.message, type: 'error' } } }; 
  }

  return response;
}

export const signup = async (body = {}) => {
  const { signup } = authUrl({});

  const headers = new Headers();
  let response = {};
  try {
    response = await axios.post(`${baseUrl}${signup}`, body, { withCredentials: true, headers });
  } catch (e) {
    response = { data: {}, error: { message: { text: e.message, type: 'error' } } }; 
  }

  return response;
}
