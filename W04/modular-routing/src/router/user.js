import UserLayout from '../views/User/UserLayout.vue'
import Profile from '../views/User/ProfileView.vue'
import Settings from '../views/User/SettingsView.vue'

export default [
    {
        path: '/user',
        component: UserLayout,
        children: [
            { path: ':id', component: Profile },
            { path: 'settings', component: Settings }
        ]
    }
]
