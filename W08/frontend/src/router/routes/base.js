import Home from '../../views/Home.vue'
import NotFound from '../../views/NotFound.vue'

export default [
    { path: '/', component: Home },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]