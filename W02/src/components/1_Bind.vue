<template>
    <div class="card">
        <h2>Lesson: Bindings (src, href)</h2>

        <div class="hero">
            <img :src="logoUrl" alt="Logo" class="logo" />
            <a :href="courseUrl" target="_blank" rel="noreferrer">Open course link</a>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import logoUrl from '../assets/images/logo.png'

const courseUrl = ref('https://example.com/course')
</script>