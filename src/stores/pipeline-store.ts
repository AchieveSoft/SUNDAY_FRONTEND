import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import type { Pipeline } from '../types/pipeline'
import { HttpClient } from '../core/http-client'
import type { BaseResponse } from '../types/base-response'

export const usePipelineStore = defineStore('pipeline', () => {
    const http = new HttpClient
    const isLoading = ref(false)
    let pipelinesTemp: Pipeline[] = []
    const pipelines: { items?: Pipeline[] } = reactive({ items: [] })


    async function getPipelines(): Promise<void> {
        isLoading.value = true
        const res = await http.get<BaseResponse<Pipeline[]>>('/pipeline/get-pipelines')
        pipelinesTemp = res.data ?? []
        pipelines.items = res.data
        isLoading.value = false
    }

    function filterPipelines(keyword: string) {
        if (keyword.length > 0)
            pipelines.items = pipelinesTemp.filter(i => i.name?.toLowerCase().includes(keyword.toLowerCase()))
        else
            pipelines.items = pipelinesTemp
    }

    return { isLoading, pipelines, getPipelines, filterPipelines }
})
