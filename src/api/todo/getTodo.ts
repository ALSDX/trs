import { useAxios } from "../useAxios"

export const getTodo = async <T> (id: string | string[]) => {
    const axiosInstance = useAxios();

    try {
        const response = await axiosInstance.get<T>(`/todos/${id}`);

        return response.data;
    } catch (error) {
        console.error(error.message);
    }
}