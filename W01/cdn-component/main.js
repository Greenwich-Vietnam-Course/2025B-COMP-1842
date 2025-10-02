import { Hello } from "./components/hello.js"
import { Counter } from "./components/counter.js"

const { createApp } = Vue

const app = createApp({})

app.component("hello", Hello)
app.component("counter", Counter)

app.mount("#app")