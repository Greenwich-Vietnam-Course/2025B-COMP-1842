import List from '../../views/authors/List.vue'
import Form from '../../views/authors/Form.vue'

export default [
    { path: '/authors', component: List },
    { path: '/authors/new', component: Form, props: { mode: 'create' } },
    {
        path: '/authors/:id/edit', component: Form,
        props: route => ({ mode: 'edit', id: route.params.id })
    }
]