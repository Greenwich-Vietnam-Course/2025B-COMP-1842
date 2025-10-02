<template>
    <div class="card">
        <h2>Lesson: v-show</h2>

        <button class="btn" @click="show = !show">
            {{ show ? 'Hide hint' : 'Show hint' }}
        </button>

        <p v-show="show">This panel stays in the DOM and toggles display.</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>