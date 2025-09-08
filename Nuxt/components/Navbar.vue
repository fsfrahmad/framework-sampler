<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-white text-xl font-bold">MyApp</NuxtLink>
      <div class="space-x-4">
        <NuxtLink to="/" class="text-white hover:text-gray-300">Home</NuxtLink>
        <NuxtLink to="/about" class="text-white hover:text-gray-300">About</NuxtLink>
        <NuxtLink to="/contact" class="text-white hover:text-gray-300">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>