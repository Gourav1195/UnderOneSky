// services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/sign-up`, { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/sign-in`, { username, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
