<script setup>
import { ref } from 'vue'
</script>
<template>
  <p v-for="n in 10" :key="n">{{ n }}</p>
  // indexが0スタートではなく1スタートになる
</template>
<style></style>
