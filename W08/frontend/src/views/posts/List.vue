<script setup>
import { onMounted, ref } from 'vue'
import { PostAPI } from '../../api/index'

const items = ref([])
const loading = ref(false)
const error = ref('')

const load = async () => {
    loading.value = true
    error.value = ''
    try {
        items.value = await PostAPI.list()
    } catch (e) {
        error.value = e?.response?.data?.error
    } finally {
        loading.value = false
    }
}

const remove = async (id) => {
    if (!confirm('Delete this post?')) return;
    await PostAPI.remove(id);
    items.value = items.value.filter(x => x._id !== id)
}

onMounted(load)
</script>

<template>
    <header>
        <h2>Posts</h2>
        <RouterLink to="/posts/new">Create</RouterLink>
    </header>

    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>

    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            <tr v-if="items.length" v-for="item in items" :key="item._id">
                <td>{{ item.title }}</td>
                <td>{{ item.content }}</td>
                <td>
                    <RouterLink :to="`/posts/${item._id}/edit`">Edit</RouterLink>
                    <button @click="remove(item._id)">Delete</button>
                </td>
            </tr>

            <tr v-else>
                <td colspan="3">No posts yet.</td>
            </tr>
        </tbody>
    </table>
</template>