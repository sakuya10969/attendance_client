import { apiClient } from '@/api/apiClient'

export const signUp = async (name: string, email: string, password: string) => {
    const response = await apiClient.post('/auth/sign-up', { name, email, password })
    return response.data
}

export const signIn = async (email: string, password: string) => {
    const response = await apiClient.post('/auth/sign-in', { email, password })
    return response.data
}
