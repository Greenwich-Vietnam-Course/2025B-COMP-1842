<template>
    <div class="card">
        <h2>Lesson: click, mouseover, style</h2>

        <div class="box" :class="{ 'box-hover': hovered }" @click="clicks++" @mouseover="hovered = true"
            @mouseleave="hovered = false" :style="{ color: textColor }">
            <p>Click Count: {{ clicks }}</p>
            <p>Mouse Over: {{ hovered ? 'Yes' : 'No' }}</p>
        </div>

        <div style="margin-top: 15px;">
            <label>
                Pick Color:
                <select v-model="textColor">
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </label>
        </div>
    </div>

    <div class="card">
        <h3>Styled Action</h3>

        <button class="btn btn-accent" @click="accentOn = !accentOn"
            :style="{ fontSize: actionFontSize + 'px', opacity: accentOn ? 1 : 0.5 }">
            Toggle Accent
        </button>

        <div style="margin-top: 20px;">
            <label>
                Font Size
                <input type="range" min="12" max="28" v-model.number="actionFontSize" />
            </label>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Pick Color.
const clicks = ref(0)
const hovered = ref(false)
const textColor = ref('black')

// Styled Action.
const accentOn = ref(false)
const actionFontSize = ref(16)
</script>