const {axiosInstance} = require('./index.js');

// Register a new user
export const registerUser = async (value) => {
    try {
        const response = await axiosInstance.post('api/users/register', value);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

// login a new user
export const loginUser = async (value) => {
    try {
        const response = await axiosInstance.post('api/users/login', value);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}
