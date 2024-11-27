<script setup name="App4">
import { ref } from 'vue'
</script>
<template>
  //キーボード系のイベント
  <p>{{ count }}</p>
  <input type="text" @keyup="count++" />
  // キーが上がった時に発火するイベント

  <input type="text" @keydown="count++" />
  // キーが下がった時に発火するイベント

  <input type="text" @keyup.space="count++" />
  // スペースキーが上がった時のみに発火するイベント
</template>
