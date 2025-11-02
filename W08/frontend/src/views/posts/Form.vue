<script setup>
import { onMounted, reactive, ref } from 'vue';
import { PostAPI } from '../../api/index';
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
    mode: { type: String, required: true },
    id: { type: String, default: '' }
})

const form = reactive({ title: '', content: '' })
const loading = ref(false)
const error = ref('')

const load = async () => {
    if (props.mode === 'edit' && props.id) {
        try {
            const data = await PostAPI.get(props.id)
            form.title = data.title || ''
            form.content = data.content || ''
        } catch (e) {
            error.value = e?.response?.data?.error
        }
    }
}

const save = async () => {
    try {
        loading.value = true
        error.value = ''

        if (props.mode === 'create') {
            await PostAPI.create(form)
        } else {
            await PostAPI.update(props.id, form)
        }

        router.push('/posts')
    } catch (e) {
        error.value = e?.response?.data?.error
    } finally {
        loading.value = false
    }
}

onMounted(load)
</script>

<template>
    <h2>{{ props.mode === 'create' ? 'Create' : 'Edit' }} Post</h2>

    <form @submit.prevent="save">
        <div>
            <label>Title</label>
            <input v-model="form.title" required placeholder="Title" />
        </div>

        <div>
            <label>Content</label>
            <textarea v-model="form.content" required placeholder="Content"></textarea>
        </div>

        <div>
            <button type="submit" :disabled="loading">{{ loading ? 'Saving…' : 'Save' }}</button>
            <RouterLink to="/posts">Cancel</RouterLink>
        </div>
    </form>

    <p v-if="error">{{ error }}</p>
</template>