<script setup>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { AuthAPI } from './api/auth'
import { session } from './auth/session'

const router = useRouter()
const isAuthed = computed(() => session.isAuthed.value)
const username = computed(() => session.state.username)

const logout = async () => {
  await AuthAPI.logout()
  session.clear()
  router.push('/login')
}

onMounted(session.restore)

// Simple refresh if token expired.
const refreshToken = async () => {
  try {
    const data = await AuthAPI.refresh()
    session.setToken(data.token)
  } catch {
    session.clear()
    router.push('/login')
  }
}

setInterval(refreshToken, 10 * 60 * 1000) // Every 10 minutes.
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/posts" v-if="isAuthed">Posts</RouterLink> |
      <RouterLink to="/authors">Authors</RouterLink> |

      <span>
        <template v-if="isAuthed">
          Hi, {{ username }}
          <button @click="logout">Logout</button>
        </template>

        <template v-else>
          <RouterLink to="/login">Login</RouterLink> |
          <RouterLink to="/register">Register</RouterLink> |
        </template>
      </span>
    </nav>

    <hr />
  </header>

  <RouterView />
</template>