<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Our Books</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BookCard
        v-for="book in books"
        :key="book.id"
        :book="book"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script setup>
const { books } = useBooks();
const { addToCart } = useCart();
</script>