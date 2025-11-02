<script setup>
import { onMounted, reactive, ref } from 'vue';
import { AuthorAPI } from '../../api/index';
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
    mode: { type: String, required: true },
    id: { type: String, default: '' }
})

const form = reactive({ name: '', email: '' })
const loading = ref(false)
const error = ref('')

const load = async () => {
    if (props.mode === 'edit' && props.id) {
        try {
            const data = await AuthorAPI.get(props.id)
            form.name = data.name || ''
            form.email = data.email || ''
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
            await AuthorAPI.create(form)
        } else {
            await AuthorAPI.update(props.id, form)
        }

        router.push('/authors')
    } catch (e) {
        error.value = e?.response?.data?.error
    } finally {
        loading.value = false
    }
}

onMounted(load)
</script>

<template>
    <h2>{{ props.mode === 'create' ? 'Create' : 'Edit' }} Author</h2>

    <form @submit.prevent="save">
        <div>
            <label>Name</label>
            <input v-model="form.name" required placeholder="Name" />
        </div>

        <div>
            <label>Email</label>
            <input v-model="form.email" required type="email" placeholder="Email" />
        </div>

        <div>
            <button type="submit" :disabled="loading">{{ loading ? 'Saving…' : 'Save' }}</button>
            <RouterLink to="/authors">Cancel</RouterLink>
        </div>
    </form>

    <p v-if="error">{{ error }}</p>
</template>