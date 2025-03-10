<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLoaderStore } from '../stores/loader-store.ts'

const loaderStore = useLoaderStore()
const { isShow } = storeToRefs(loaderStore)

</script>

<template>
<div v-if="isShow" class="w-100 h-100 d-flex justify-content-center align-items-center loader-area">
    <div class="spinner-border text-danger"></div>
</div>
</template>

<style>
.loader-area {
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    opacity: .8;
}
</style>
