<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { AuthAPI } from '../../api/index'
import { session } from '../../auth/session'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const login = async () => {
    try {
        const data = await AuthAPI.login({
            username: username.value,
            password: password.value
        })

        session.setToken(data.token)
        await session.restore() // Load profile.

        router.push('/')
    } catch (e) {
        error.value = e.response?.data?.error
    }
}
</script>

<template>
    <h2>Login</h2>

    <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />

        <button type="submit">Login</button>
    </form>

    <p v-if="error">{{ error }}</p>

    <p>
        No Account? <RouterLink to="/register">Register</RouterLink>
    </p>
</template>