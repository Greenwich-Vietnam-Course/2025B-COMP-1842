<template>
    <div class="card">
        <h2>Lesson: v-if / v-else</h2>

        <p v-if="isLoggedIn">Welcome back, {{ studentName }}.</p>
        <p v-else>Please log in to continue.</p>

        <button class="btn" @click="toggle">{{ isLoggedIn ? 'Log out' : 'Log in' }}</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(false)
const studentName = ref('Alex')

const toggle = () => (isLoggedIn.value = !isLoggedIn.value)
</script>