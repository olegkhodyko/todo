import axios from 'axios';

export const api = axios.create({
  baseURL: `http://192.168.100.170:1337/api/tasks`,
  timeout: 5000,
});
