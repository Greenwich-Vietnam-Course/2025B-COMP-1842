<template>
  <main class="page">
    <header class="hero">
      <img :src="logoUrl" alt="Logo" class="logo" />
      <h1>Week 02 — Vue Basics</h1>
    </header>

    <!-- Comment or uncomment to test individual lesson. -->
    <!-- <LessonBind /> -->
    <!-- <LessonIf /> -->
    <!-- <LessonShow /> -->
    <!-- <LessonList /> -->
    <!-- <LessonEvent /> -->
  </main>
</template>

<script setup>
import logoUrl from './assets/images/logo.png'

import LessonBind from './components/1_Bind.vue'
import LessonIf from './components/2_If.vue'
import LessonShow from './components/3_Show.vue'
import LessonList from './components/4_List.vue'
import LessonEvent from './components/5_Event.vue'
</script>