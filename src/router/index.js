import {createRouter, createWebHashHistory} from 'vue-router'
import GlobalFeed from '../views/GlobalFeed.vue'

const routes = [
    {
        path: '/',
        name: 'GlobalFeed',
        component: GlobalFeed,
    },
    {
        path: '/register',
        name: 'Register',

        component: () => import('@/views/Register.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
