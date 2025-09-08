<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>
    <div v-if="cart.length === 0" class="text-center py-8">
      <p class="text-gray-600">Your cart is empty</p>
      <NuxtLink 
        to="/books" 
        class="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded"
      >
        Browse Books
      </NuxtLink>
    </div>
    <div v-else>
      <div class="space-y-4">
        <div v-for="item in cart" :key="item.book.id" class="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <div class="flex items-center space-x-4">
            <img :src="item.book.cover" :alt="item.book.title" class="w-16 h-16 object-cover rounded">
            <div>
              <h3 class="font-semibold">{{ item.book.title }}</h3>
              <p class="text-gray-600">Quantity: {{ item.quantity }}</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <p class="font-bold">${{ item.book.price * item.quantity }}</p>
            <button 
              @click="removeFromCart(item.book.id)"
              class="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div class="mt-6 text-right">
        <p class="text-xl font-bold">Total: ${{ getTotal() }}</p>
        <button class="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { cart, removeFromCart, getTotal } = useCart()
</script>