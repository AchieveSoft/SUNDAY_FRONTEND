import { createWebHistory, createRouter } from 'vue-router'
import Login from './pages/Login.vue'
import Summary from './pages/Summary.vue'
import PipelineDetail from './pages/PipelineDetail.vue';

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/summary',
        component: Summary
    },
    {
        path: '/pipeline-detail',
        component: PipelineDetail
    },
];


export const router = createRouter({ history: createWebHistory(), routes })
