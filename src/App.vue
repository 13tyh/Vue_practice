<script setup>
import { ref } from 'vue'
const fruits = ref(['apple', 'banana', 'cherry'])
const user = ref({
  name: 'Yoshipi',
  age: 25,
  gender: 'man',
})
</script>
<template>
  <template v-for="(fruit, index) in fruits" :key="fruit">
    <p>type="text">{{ fruit }},{{ index }}</p>
  </template>
  // v-ifとv-forは同じ要素に使うことができない // // 使う場合はtemタグを増やして一つずらす

  <template>
    <p v-for="(value, key, index) in user" :key="value">{{ key }}:{{ value }}({{ index }})</p>
  </template>
</template>
<style></style>
