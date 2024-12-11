<script setup>
const emit = defineEmits(['reset'])
function emitReset() {
  emit('reset', 100)
}
//無駄に属性が継承されなくなる
// emitを使うときは常に書くことがおすすめ
//scriptからイベントをエミットしたい場合は返り値を使う
</script>
<template>
  <button @click="emitReset">Reset</button>
  // emitの命名規則は親はケバブケース、子はキャメルケースを使う //
  $emitでイベント名を指定して、親コンポーネント側でリセット処理を書くと、子からリセット処理を呼び出せる
  // 第2引数で値を指定でき,関数にパラメータとして代入できる
</template>
