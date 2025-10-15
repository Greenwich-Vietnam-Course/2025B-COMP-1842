import Home from '../views/Home/HomeView.vue'
import About from '../views/Home/AboutView.vue'
import Contact from '../views/Home/ContactView.vue'
import NotFound from '../views/Home/NotFoundView.vue'

export default [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/:pathMatch(.*)*', component: NotFound }
]