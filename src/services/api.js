import axios from 'axios';

const server = "https://localhost:5001/"

const api = axios.create({
    baseURL: server
});

export default api;