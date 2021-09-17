import axios, { AxiosInstance } from 'axios';

const TOKEN_KEY = 'ms-token';
export const getToken = () => localStorage.getItem(TOKEN_KEY) || '';

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL as string,
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const GetTeste = () => api
  .get('/teste')
  .then((response) => response.data);
