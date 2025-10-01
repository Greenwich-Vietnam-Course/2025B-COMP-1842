import { Hello } from "./hello.js"
import { Counter } from "./counter.js"

const { createApp } = Vue

const app = createApp({})
app.component("hello", Hello)
app.component("counter", Counter)
app.mount("#app")