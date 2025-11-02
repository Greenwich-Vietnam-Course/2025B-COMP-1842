<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/posts">Posts</RouterLink> |
      <RouterLink to="/authors">Authors</RouterLink>
    </nav>

    <hr />
  </header>

  <RouterView />
</template>

<script setup>
</script>