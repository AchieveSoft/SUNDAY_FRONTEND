<script setup lang="ts">
import { Card, Divider } from 'primevue'
import { useRouter } from 'vue-router'
import type { Pipeline } from '../types/pipeline'
import type { State } from '../types/state'

const router = useRouter()
const props = defineProps<Pipeline>()

function getColorByState(state: State): string {
    if (state === 'pass') return '#1abc9c'
    else if (['running', 'pause'].includes(state)) return '#f1c40f'
    else if (state === 'fail') return '#e74c3c'
    else return 'black'
}

function getIconByState(state: State): string {
    if (state === 'pass') return 'pi pi-verified'
    else if (['running', 'pause'].includes(state)) return 'pi pi-pause'
    else if (state === 'fail') return 'pi pi-times'
    else return 'black'
}

function gotoPipelineDetailPage(): void {
    router.push(`/pipeline-detail?pipelineCode=12345`)
}

</script>

<template>
    <Card>
        <template #title>{{ props.pipelineName }}</template>
        <template #content>
            <div class="w-100 d-flex flex-row justify-content-end mt-3">
                <i class="pi pi-eye me-3 cursor-pointer" @click="gotoPipelineDetailPage"></i>
                <i class="pi pi-play me-3 cursor-pointer"></i>
                <i class="pi pi-pause me-3 cursor-pointer"></i>
            </div>
            <Divider />
        </template>
        <template #footer>
            <div class="w-100">
                <span><b>Instance: {{ props.latestInstance }}</b></span>
                <div class="row mt-3" v-if="(props.stages ?? []).length > 0">
                    <div class="col-3" v-for="stage in props.stages">
                        <div class="stage-item" :style="{ backgroundColor: getColorByState(stage.state!) }">
                            <i class="cursor-pointer" :class="getIconByState(stage.state!)"></i>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Card>
</template>

<style>
.stage-item {
    width: 100%;
    min-height: 30px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 2px;
}

.cursor-pointer {
    cursor: pointer;
}
</style>