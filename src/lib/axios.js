import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // Asegúrate de que esta URL sea correcta
});

export default instance;
