<script setup>
import { ref } from 'vue'
const msg = ref('<h1>helloworld</h1>')
const vueURL = ref('https://v3.vuejs.org/')
const vueID = ref('vue-link')
</script>
<template>
  <div v-html="msg"></div>
  //v-htmlはXSSの脆弱性を持つため、信頼できるソースからのみ使用する //ユーザーからの入力は使用しない

  <a :id="vueID" :href="vueURL">Vue 3 Docs</a>
  //v-bind:を省略した書き方 //:id="id"の時は :id でいい

  <button :disabled="true"></button>
  // boolean属性で属性値がtrueの場合は属性名だけでいい //
  数字やnull,undefinedの場合は属性が付与されない

  <a v-bind="{ id: vueID, href: vueURL }">Vue.js</a>
  //オブジェクトを使って複数の属性をバインドすることもできる
</template>
