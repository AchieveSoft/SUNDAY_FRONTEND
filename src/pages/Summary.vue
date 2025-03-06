<script setup lang="ts">
import AppBar from '../components/AppBar.vue'
import PipelineCard from '../components/PipelineCard.vue';
import type { Stage } from '../types/pipeline';

const mockStageList: Stage[] = [
    {
        stageCode: '',
        stageName: 'Mock',
        state: 'pass'
    },
    {
        stageCode: '',
        stageName: 'Mock',
        state: 'pass'
    },
    {
        stageCode: '',
        stageName: 'Mock',
        state: 'pass'
    },
    {
        stageCode: '',
        stageName: 'Mock',
        state: 'pause'
    }
]

</script>

<template>
    <AppBar />
    <div class="container my-3">
        <div class="row">
            <div class="col-sm-12 col-md-4 my-2">
                <PipelineCard
                    pipeline-name="Sunday Pacthing"
                    latest-instance="100"
                    :stages="mockStageList"
                />
            </div>
            <div class="col-sm-12 col-md-4 my-2">
                <PipelineCard
                    pipeline-name="Sunday Pacthing"
                    latest-instance="100"
                    :stages="mockStageList"
                />
            </div>
            <div class="col-sm-12 col-md-4 my-2">
                <PipelineCard
                    pipeline-name="Sunday Pacthing"
                    latest-instance="100"
                    :stages="mockStageList"
                />
            </div>
            <div class="col-sm-12 col-md-4 my-2">
                <PipelineCard
                    pipeline-name="Sunday Pacthing"
                    latest-instance="100"
                    :stages="mockStageList"
                />
            </div>
            <div class="col-sm-12 col-md-4 my-2">
                <PipelineCard
                    pipeline-name="Sunday Pacthing"
                    latest-instance="100"
                    :stages="mockStageList"
                />
            </div>
        </div>
    </div>
</template>
