<template>
  <button @click="$emit('reset', 100)">Reset</button>
  //
  $emitでイベント名を指定して、親コンポーネント側でリセット処理を書くと、子からリセット処理を呼び出せる
  // 第2引数で値を指定でき,関数にパラメータとして代入できる
</template>
