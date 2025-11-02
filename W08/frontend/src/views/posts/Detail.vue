<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PostAPI } from '../../api/index'

const route = useRoute()
const router = useRouter()
const item = ref(null)
const loading = ref(true)
const error = ref('')

const load = async () => {
    try {
        const id = route.params.id
        item.value = await PostAPI.get(id)
    } catch (e) {
        error.value = e.response?.data?.error
    } finally {
        loading.value = false
    }
}

const remove = async () => {
    if (!confirm('Delete this post?')) return
    try {
        await PostAPI.remove(item.value._id)
        router.push('/posts')
    } catch (e) {
        alert(e.response?.data?.error)
    }
}

onMounted(load)
</script>

<template>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>

    <div v-if="item">
        <h2>{{ item.title }}</h2>
        <p>{{ item.content }}</p>

        <p>
            <RouterLink :to="`/posts/${item._id}/edit`">Edit</RouterLink> |
            <button @click="remove">Delete</button> |
        </p>

        <p>
            <RouterLink to="/posts">Back to list</RouterLink>
        </p>
    </div>
</template>