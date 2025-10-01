import { apiClient } from '@/api/apiClient'

export const signUp = async (name: string, email: string, password: string) => {
    try {
        const response = await apiClient.post('/auth/sign-up', { name, email, password })
        return response.data
    } catch (error) {
        console.error('Sign up error:', error)
        throw error
    }
}

export const signIn = async (email: string, password: string) => {
    try {
        const response = await apiClient.post('/auth/sign-in', { email, password })
        return response.data
    } catch (error) {
        console.error('Sign in error:', error)
        throw error
    }
}
