<template>
    <h2>User Dashboard</h2>
    <nav>
        <router-link to="/user/1">Profile</router-link> |
        <router-link to="/user/settings">Settings</router-link>
    </nav>
    <hr />

    <router-view></router-view>
</template>
