
import axios from 'axios';

export const api = axios.create({
  baseURL: "/api",
  timeout: 5000,
  withCredentials: true
});
