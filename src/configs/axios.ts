import axios from "axios";
export const configUseAxios = () => {
    axios.defaults.baseURL = "http://localhost:8000/api";
    axios.defaults.timeout = 15000;
    axios.interceptors.request.use(
        (config) => {
            const token = sessionStorage.getItem('token');
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        },

        (error) => {
            return Promise.reject(error);
        }
    );
}
