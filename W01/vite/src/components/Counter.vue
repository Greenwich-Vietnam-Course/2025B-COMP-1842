<template>
  <h1>{{ count }}</h1>
  
  <button @click="increment">
    Increase
  </button>
  
  <button @click="decrement">
    Decrease
  </button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value += 1
}

function decrement() {
  count.value -= 1
}
</script>