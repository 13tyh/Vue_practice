<script setup>
import { ref } from 'vue'

const userInput = ref('')
</script>
<template>
  <h1>v-model</h1>
  <input v-model="userInput" type="text" />
  <p>{{ userInput }}</p>
</template>
