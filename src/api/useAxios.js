import axios from "axios"

export const useAxios = () => {
    const axiosInstance = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL
    })

    return axiosInstance;
}