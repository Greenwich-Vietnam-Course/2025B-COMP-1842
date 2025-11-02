<script setup>
import { onMounted, ref } from 'vue'
import { AuthorAPI } from '../../api/index'

const items = ref([])
const loading = ref(false)
const error = ref('')

const load = async () => {
    loading.value = true
    error.value = ''
    try {
        items.value = await AuthorAPI.list()
    } catch (e) {
        error.value = e?.response?.data?.error
    } finally {
        loading.value = false
    }
}

const remove = async (id) => {
    if (!confirm('Delete this author?')) return;
    await AuthorAPI.remove(id);
    items.value = items.value.filter(x => x._id !== id)
}

onMounted(load)
</script>

<template>
    <header>
        <h2>Authors</h2>
        <RouterLink to="/authors/new">Create</RouterLink>
    </header>

    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Created</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            <tr v-if="items.length" v-for="item in items" :key="item._id">
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.createdAt ? new Date(item.createdAt).toLocaleString() : '' }}</td>
                <td>
                    <RouterLink :to="`/authors/${item._id}`">View</RouterLink> |
                    <RouterLink :to="`/authors/${item._id}/edit`">Edit</RouterLink> |
                    <button @click="remove(item._id)">Delete</button> |
                </td>
            </tr>

            <tr v-else>
                <td colspan="4">No authors yet.</td>
            </tr>
        </tbody>
    </table>
</template>