import { apiClient } from '@/api/apiClient';

export const getUser = async () => {
    const response = await apiClient.get('/')
    return response.data
}