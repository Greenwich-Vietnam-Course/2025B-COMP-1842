<template>
  <div>
    <!-- Navigation Links -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/user">User</router-link>
    </nav>

    <hr />

    <!-- Dynamic Page Display -->
    <router-view></router-view>
  </div>
</template>
