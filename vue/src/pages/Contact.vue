<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  console.log('Form submitted:', { name: name.value, email: email.value, message: message.value })
}
</script>

<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          v-model="name" 
          required
        >
      </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          v-model="email" 
          required
        >
      </div>
      
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea 
          id="message" 
          v-model="message" 
          required
        ></textarea>
      </div>
      
      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<style scoped>
.contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-form {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  height: 150px;
  resize: vertical;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #3aa876;
}
</style>