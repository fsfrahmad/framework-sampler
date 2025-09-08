<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <main class="content">
    <router-view></router-view>
  </main>
</template>

<style scoped>
.content {
  padding-top: 5rem;
}
</style>