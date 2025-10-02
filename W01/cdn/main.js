const { createApp } = Vue

const app = createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count += 1
        },
        decrement() {
            this.count -= 1
        }
    }
})

app.mount('#app')