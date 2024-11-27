<script setup name="App3">
import { ref } from 'vue'
const count = ref(0)
function countUp() {
  count.value++
}
</script>
<template>
  <p>{{ count }}</p>
  <button v-on:click="countUp">button</button>
  //インラインハンドラーの書き方

  <button @click="count++">button</button>
  //メソッドハンドラーの書き方 // v-on:click は @click で省略できる

  <button @click="count = $event.clientX">button</button>
  //イベントオブジェクトを使う場合は $event を使う

  <div>
    <button @click="$event.stopPropagation()">button</button>
  </div>
  //$event.stopPropagation()は親要素へのイベントの伝播を止める //@click.stop="" も同じ効果がある

  <a @click="$event.preventDefault()" href="https://vuejs.org">Vue.js</a>
  //$event.preventDefault()" はリンクをクリックしてもページ遷移しないようにする //@click.prevent=""
  も同じ効果がある

  <a @click.prevent.stop="" href="https://vuejs.org">Vue.js</a>
  // .prevent と .stop を同時に使うこともできる
</template>
