<script setup>
import { ref } from 'vue'
import ShowCount from './components/ShowCount.vue'
const count = ref(0)
</script>
<template>
  <ShowCount :foo="count" bar="hello" />
  {/* propsの命名規則はケバブケース */}
  <button @click="count++">+1</button>
</template>
