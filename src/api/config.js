import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:5000/',
    timeout: 1000,
    headers: {'Content Type': 'application/json'}
});