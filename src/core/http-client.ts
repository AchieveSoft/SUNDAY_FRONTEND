import { config } from "../config"

export class HttpClient {
    private headers = {
        'Accept': 'application/json, plain/text',
        'Content-Type': 'application/json'
    }

    constructor(private baseUrl: string = config.BASE_URL) { }

    async get<T>(url: string): Promise<T> {
        return await (await fetch(`${this.baseUrl}${url}`, { headers: this.headers })).json()
    }

    async post<T>(url: string, data: any): Promise<T> {
        return await (await fetch(`${this.baseUrl}${url}`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data)
        })).json()
    }
}
