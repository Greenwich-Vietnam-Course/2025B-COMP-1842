<template>
    <div class="card">
        <h2>Lesson: v-for, key, class, disabled, mouseover</h2>

        <ul class="list">
            <li v-for="s in students" :key="s.id" class="list-item" @mouseover="hoveredId = s.id"
                @mouseleave="hoveredId = null" :class="{
                    selected: selectedId === s.id,
                    hovered: hoveredId === s.id
                }">
                <span>{{ s.name }}</span>

                <button class="btn" @click="selectedId = s.id" :disabled="selectedId === s.id">
                    {{ selectedId === s.id ? 'Selected' : 'Select' }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const students = ref([
    { id: 1, name: 'Mai' },
    { id: 2, name: 'An' },
    { id: 3, name: 'Long' }
])

const selectedId = ref(null)
const hoveredId = ref(null)
</script>