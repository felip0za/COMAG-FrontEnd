import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // ou o endereço correto do seu backend
});

export default api;
