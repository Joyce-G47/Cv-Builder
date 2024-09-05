//src/api/auth.js
import axios from 'axios';
const API_URL = 'http://192.168.12.193:5000/api';

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};
