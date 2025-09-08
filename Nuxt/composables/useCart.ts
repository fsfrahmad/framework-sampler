import { ref } from 'vue'

export const useCart = () => {
  const cart = ref<{ book: Book; quantity: number }[]>([])

  const addToCart = (book: Book) => {
    const existingItem = cart.value.find(item => item.book.id === book.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      cart.value.push({ book, quantity: 1 })
    }
  }

  const removeFromCart = (bookId: string) => {
    cart.value = cart.value.filter(item => item.book.id !== bookId)
  }

  const getTotal = () => {
    return cart.value.reduce((total, item) => total + item.book.price * item.quantity, 0)
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    getTotal
  }
}