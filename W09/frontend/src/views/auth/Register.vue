<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { AuthAPI } from '../../api/index'

const username = ref('')
const password = ref('')
const role = ref('user') // Default role.
const error = ref('')
const router = useRouter()

const register = async () => {
    error.value = ''
    try {
        await AuthAPI.register({
            username: username.value,
            password: password.value,
            role: role.value
        })
        router.push('/login');
    } catch (e) {
        error.value = e.response?.data?.error
    }
}
</script>

<template>
    <h2>Register</h2>

    <form @submit.prevent="register">
        <input v-model="username" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />

        <select v-model="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>

        <button type="submit">Create Account</button>
    </form>

    <p v-if="error">{{ error }}</p>

    <p>
        Already have an account? <RouterLink to="/login">Login</RouterLink>
    </p>
</template>