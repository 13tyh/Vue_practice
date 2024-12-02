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
    <li v-for="(fruit, index) in fruits" :key="fruit">
      //indexをkey属性にするのは非推奨 // key属性はユニークな値を指定する //
      <input type="text">{{ fruit }},{{ index }}</input>
    </li>
    // v-forで配列の中身を表示する // :key="fruit"でユニークなkeyを指定する //
    appleが被ったら行けないので、ユニークなkeyを指定する(オブジェクトにしてidなど)
    // ({})の中だと分割代入ができる
  </template>
</template>
<style></style>
