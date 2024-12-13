import axios from 'axios';
const PORT = 5000;
const instance = axios.create({
    baseURL: `http://localhost:${PORT}/api/`
})
export default instance;