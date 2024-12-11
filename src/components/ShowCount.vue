<script setup>
defineProps({
  foo: { Number, default: 100 },
  bar: { String, required: true },
}) // デフォルトとrequiredを設定することができる
// 配列とオブジェクトの時だけは、defaultを使うことができない
// typeがbooleanの時は、undefinedを設定することができず、trueになる
// データがないときはfalseになる
</script>

<template>
  <p>count: {{ foo }}</p>
  <p>{{ bar }}</p>
</template>
