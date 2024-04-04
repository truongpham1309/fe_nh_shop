import axios from "axios";
export const configUseAxios = () => {
    axios.defaults.baseURL = "http://localhost:8000/api";
    axios.defaults.timeout = 15000;
    axios.interceptors.request.use(
        (config) => {
            const users = sessionStorage?.getItem('token')!;
            if (users) {
                const tokenParse = JSON.parse(users);
                config.headers.authorization = `Bearer ${tokenParse?.token}`;
            }
            return config;
        },

        (error) => {
            return Promise.reject(error);
        }
    );
}
