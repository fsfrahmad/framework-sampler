<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="book.cover" :alt="book.title" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-lg font-semibold">{{ book.title }}</h3>
      <p class="text-gray-600">{{ book.author }}</p>
      <p class="text-green-600 font-bold mt-2">${{ book.price }}</p>
      <button 
        @click="addToCart(book)"
        class="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps<{
  book: Book
}>()

const { addToCart } = useCart()
</script>