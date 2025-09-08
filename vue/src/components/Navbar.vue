<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]
</script>

<template>
  <nav class="navbar">
    <div class="brand" @click="router.push('/')">
      <img src="/vite.svg" alt="Logo" class="nav-logo" />
      <span>My App</span>
    </div>
    <ul class="nav-links">
      <li v-for="item in navItems" :key="item.path">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
}

.nav-logo {
  height: 2em;
  padding: 0.2em;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #42b883;
}
</style>