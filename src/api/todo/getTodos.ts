import { useAxios } from "../useAxios"

export const getTodos = async <T> () => {
    const axiosInstance = useAxios();

    try {
        const response = await axiosInstance.get<T>('/todos');

        return response.data;
    } catch (error) {
        console.error(error.message)
    }
}