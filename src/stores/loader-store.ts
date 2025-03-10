import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', () => {
    const isShow = ref(false)

    function show() {
        isShow.value = true
    }

    function hide() {
        isShow.value = false
    }

    return { isShow, show, hide }
})
