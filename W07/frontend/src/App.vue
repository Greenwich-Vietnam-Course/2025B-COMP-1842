<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <p>{{ post.title }}</p>
      <p>{{ post.content }}</p>
    </li>
  </ul>
</template>

<script setup>
// npm install axios
import axios from 'axios';
import { ref } from 'vue';

const posts = ref([]);

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
});

async function fetchPosts() {
  try {
    const response = await api.get('/posts');
    posts.value = response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

fetchPosts();
</script>