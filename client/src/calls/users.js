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

export const GetCurrentUser = async() => {
    try {
        const response = await axiosInstance.get('api/users/get-current-user');
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

/// Forget and Reset Password

export const ForgetPassword = async (value) => {
    try {
        const response = await axiosInstance.patch("api/users/forgetpassword", value);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const ResetPassword = async (value) => {
    try {
        const response = await axiosInstance.patch("api/users/resetpassword", value);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
