import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Contact from '../views/ContactView.vue'
import User from '../views/UserView.vue'
import NotFound from '../views/NotFoundView.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/user/:id', component: User },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

export default createRouter({
    history: createWebHistory(),
    routes
})