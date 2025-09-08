<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">All Books</h1>
      <select v-model="selectedCategory" class="border rounded p-2">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BookCard 
        v-for="book in filteredBooks" 
        :key="book.id" 
        :book="book"
      />
    </div>
  </div>
</template>

<script setup>
const selectedCategory = ref('')
const categories = ['Classic', 'Fiction', 'Non-Fiction', 'Science', 'Technology']

const books = ref([
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 9.99,
    cover: '/images/gatsby.jpg',
    description: 'A story of decadence and excess.',
    category: 'Classic'
  },
  // Add more books here
])

const filteredBooks = computed(() => {
  if (!selectedCategory.value) return books.value
  return books.value.filter(book => book.category === selectedCategory.value)
})
</script>