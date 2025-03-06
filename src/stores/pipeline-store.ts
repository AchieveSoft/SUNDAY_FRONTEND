import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePipelineStore = defineStore('pipeline', () => {
    const count = ref(0)
    const tipleCount = computed(() => count.value * 3)
    const increment = () => count.value++

    return { count, tipleCount, increment }
})
