<template>
    <form @submit.prevent="handleSubmit">
        <!-- Inputs -->
        <label>
            Name:
            <input type="text" v-model.trim="form.name" placeholder="Enter your name" />
        </label>

        <label>
            Email:
            <input type="email" v-model="form.email" placeholder="Enter your email" />
        </label>

        <!-- Radio Buttons -->
        <fieldset>
            <legend>Gender:</legend>
            <label><input type="radio" value="male" v-model="form.gender" /> Male</label>
            <label><input type="radio" value="female" v-model="form.gender" /> Female</label>
            <label><input type="radio" value="other" v-model="form.gender" /> Other</label>
        </fieldset>

        <!-- Select Dropdown -->
        <label>
            Favorite Language:
            <select v-model="form.language">
                <option disabled value="">Select one</option>
                <option>JavaScript</option>
                <option>Python</option>
                <option>Java</option>
                <option>C#</option>
            </select>
        </label>

        <!-- Checkboxes -->
        <fieldset>
            <legend>Skills:</legend>
            <label><input type="checkbox" value="HTML" v-model="form.skills" /> HTML</label>
            <label><input type="checkbox" value="CSS" v-model="form.skills" /> CSS</label>
            <label><input type="checkbox" value="Vue" v-model="form.skills" /> Vue</label>
        </fieldset>

        <!-- Textarea -->
        <label>
            Comments:
            <textarea v-model="form.comments" rows="3" placeholder="Your comments..."></textarea>
        </label>

        <div style="margin-top:10px;">
            <button type="submit">Submit</button>
            <button type="button" @click="resetForm">Reset</button>
        </div>
    </form>

    <h3>Live Form Data</h3>
    <pre>{{ form }}</pre>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
    name: '',
    email: '',
    gender: '',
    language: '',
    skills: [],
    comments: ''
})

function handleSubmit() {
    alert(`Form submitted by ${form.name || 'Anonymous'}`)
    console.log('Submitted data:', { ...form })
}

function resetForm() {
    Object.assign(form, {
        name: '',
        email: '',
        gender: '',
        language: '',
        skills: [],
        comments: ''
    })
}
</script>