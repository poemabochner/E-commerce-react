import axios from 'axios';

const api  = axios.create({
    baseURL: "https://63692c3d15219b84961176c0.mockapi.io"
});

export default api;