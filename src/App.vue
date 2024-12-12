<script setup>
import { shallowRef } from 'vue'

const currentComp = shallowRef(CompA)
</script>
<template>
  <h1>動的コンポーネント</h1>
  <component :is="currentComp" />
  // ボタンをクリックするとcurrentComponentの値が変わる // 例：タブの切り替え //
  shallowRefを使ってcurrentComponentの値を変更する // パフォーマンスがrefよりも良い
</template>
