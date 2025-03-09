<script setup lang="ts">
import { onMounted } from 'vue'
import AppBar from '../components/AppBar.vue'
import PipelineCard from '../components/PipelineCard.vue'
import { usePipelineStore } from '../stores/pipeline-store'

const pipelineStore = usePipelineStore()

onMounted(async () => {
    await pipelineStore.getPipelines()
})
</script>

<template>
    <AppBar />
    <div class="container my-3">
        <div class="row">
            <template v-for="pipeline in pipelineStore.pipelines.items">
                <div class="col-sm-12 col-md-4 my-2">
                    <PipelineCard
                        :name="pipeline.name"
                        latest-instance="100"
                        :stages="pipeline.stages"
                    />
                </div>
            </template>
        </div>
    </div>
</template>
