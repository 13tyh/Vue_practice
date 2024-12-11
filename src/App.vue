<script setup>
import CountUp from '@/components/CountUp.vue'
// @はソースディレクトリを指す
</script>
<template>
  <CountUp />
  // 別々にカウントアップする // 閉じタグも可能 //
  ファイル名はパスカルケースで書く-ケバブケースも一応OK // 2単語以上で書く //

  <BaseIcon />

  <BaseButton id="baseButton" />
  // 子コンポーネントにidを付けることもできる // これはベースボタンのid
  //子にも書いた時は親のものが優先される // クラスは子と親のものが合体される

  <p>{{ $attrs }}</p>
  <h2 v-bind="$attrs">CountUp</h2>
  // $attrsは親コンポーネントから受け取った属性をそのまま子コンポーネントに渡す //
  v-bindで属性をバインドする
</template>
<style></style>
