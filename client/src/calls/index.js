import axios from 'axiso';

export const axiosInstance = axios.create({
    headers: {
        'Content-Type' : "application/json"
    }
})