<script setup>
import { ref, reactive } from 'vue'

let price = ref(100)
//refは値を保持するためのもの
//getterとsetterを持つ
// .valueで値を取得する

function increment() {
  price.value++
}
function decrement() {
  price.value--
}

const instructor = reactive({
  //reactiveはオブジェクトを保持するためのもの
  // refを使ってもいいが、refを使うとオブジェクトの中の値を取得する際に.valueをつける必要がある
  //Proxyを使っているため、オブジェクトの中の値を取得する際に.valueをつける必要がない
  name: 'John Doe',
  age: 30,
  title: ref('Vue 3 Master'),
  sns: { twitter: '@john_doe_twitter', linkedin: '@john_doe_linkedin', github: '@john_doe_github' },
})
const items = reactive([ref(1), ref(2), 3])
console.log('instructor.name', instructor.name)
console.log(items[0].value) //配列の中のrefの値を取得する場合は.valueをつける
</script>
<template>
  <h1>price: {{ price }}</h1>
  <button @click="increment">price + 1</button> //onClickではなく@click
  <button @click="decrement">price - 1</button>
  <h1>name:{{ instructor.name }}</h1>
  <h1>title: {{ instructor.title }}</h1>
</template>
