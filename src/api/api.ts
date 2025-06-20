import axios from 'axios';
// import { DB_PORT } from '@env';

export const api = axios.create({
  baseURL: `http://192.168.100.167:1337/api/tasks`,
  timeout: 5000,
});
