import { createRouter, createWebHistory } from 'vue-router'
import homeRoutes from './home'
import userRoutes from './user'

const routes = [
    ...homeRoutes,
    ...userRoutes
]

export default createRouter({
    history: createWebHistory(),
    routes
})
