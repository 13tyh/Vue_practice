<script setup>
import { ref } from 'vue'
const ok = ref(true)
const maybe = ref(false)

const fruits = ref(['apple', 'banana', 'cherry'])
</script>
<template>
  <button @click="ok = !ok">toggle</button>
  <p v-if="ok">OK!</p>
  <p v-else-if="maybe">Maybe...OK!</p>
  <p v-else-if="maybe">Maybe...OK!</p>
  <p v-else-if="maybe">Maybe...OK!</p>
  <p v-else-if="maybe">Maybe...OK!</p>
  // falseの時は下に処理が行く // v-if, v-else-if, v-elseを並べないとエラーになる

  <template v-if="ok">
    <p>OK!</p>
    <p>Hello</p>
    <p>Hi</p>
  </template>
  // v-ifの中に複数の要素を持たせる場合はtemplateタグで囲む //
  完全に消されるので、templateタグはhtmlには出力されない // 高頻度で切り替えない場合はv-ifを使う

  <template>
    <p v-show="ok">Ok!</p>
  </template>
  // v-showはdisplay: none;で非表示にするだけ //
  処理が早いので、頻繁に表示非表示を切り替える場合はv-showを使う

  <template>
    <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    // v-forで配列の中身を表示する // :key="fruit"でユニークなkeyを指定する
  </template>
</template>
<style></style>
