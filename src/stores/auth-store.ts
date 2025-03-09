import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { HttpClient } from '../core/http-client'
import type { BaseResponse } from '../types/base-response'

export const useAuthStore = defineStore('auth', () => {
    const http = new HttpClient
    const loginResult = reactive<BaseResponse<any>>({})

    async function login(email: string, password: string): Promise<void> {
        const res = await http.post<BaseResponse<any>>('/auth/login', { email, password })
        loginResult.success = res.success
        loginResult.message = res.message
    }

    return { loginResult, login }
})
