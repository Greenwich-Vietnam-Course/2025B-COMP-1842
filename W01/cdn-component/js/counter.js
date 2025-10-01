export const Counter = {
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
    },
    template: `
        <h1>{{ count }}</h1>
        
        <button @click="increment">
            Increase
        </button>

        <button @click="decrement">
            Decrease
        </button>
    `
}