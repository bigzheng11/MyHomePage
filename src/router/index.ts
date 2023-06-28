import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import index from '../views/index.vue'
import select from '../views/select.vue'
import tool from "@/views/tool.vue";
import other from "@/views/other.vue";
import document from "@/views/document.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'select',
        component: select
    },
    {
        path: '/document',
        name: 'document',
        component: document
    },
    {
        path: '/tool',
        name: 'tool',
        component: tool
    },
    {
        path: '/other',
        name: 'other',
        component: other
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
