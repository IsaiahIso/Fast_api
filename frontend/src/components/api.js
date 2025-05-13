 import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000' // Use http, not https
});

export default api;
