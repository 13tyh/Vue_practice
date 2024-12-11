<script setup>
defineProps({
  foo: { Number, default: 100 },
  bar: { String, required: true },
})
</script>

<template>
  <p>count: {{ foo }}</p>
  <p>{{ bar }}</p>
</template>
