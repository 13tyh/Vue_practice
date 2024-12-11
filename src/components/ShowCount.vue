<script setup>
const props = defineProps(['foo', 'bar'])
// const { foo, bar } = defineProps(['foo', 'bar'])
//この書き方でも良い（分割代入）
console.log(props.foo)
// propsは読み取り専用なので、以下のような書き方はできない
// props.foo = 10
// 親コンポーネントでpropsを更新する
</script>

<template>
  <p>count: {{ foo }}</p>
  <p>{{ bar }}</p>
</template>
