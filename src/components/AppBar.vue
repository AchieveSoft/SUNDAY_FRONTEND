<script setup lang="ts">
import { Toolbar, IconField, InputIcon, InputText } from 'primevue'

const props = defineProps(['pipelineName'])

</script>

<template>
    <Toolbar :style="{ backgroundColor: '#e74c3c', color: 'white' }">
        <template #start>
            <b>SUNDAY CI/CD</b>
        </template>
        <template #end>
            <template v-if="!props.pipelineName || props.pipelineName === ''">
                <IconField>
                    <InputIcon><i class="pi pi-search"></i></InputIcon>
                    <InputText type="text" placeholder="Search pipelines" />
                </IconField>
            </template>
            <template v-if="props.pipelineName && props.pipelineName != ''">
                <b>{{ props.pipelineName }}</b>
            </template>
        </template>
    </Toolbar>
</template>

<style>
.toolbar-custom-style {
    background-color: #e74c3c;
    color: white;
}
</style>
