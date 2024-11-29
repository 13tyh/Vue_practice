<script setup>
import { ref, reactive, computed, watchEffect, watch } from 'vue'

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

const title = ref('<h1>Vue 3 Master</h1>')

const instructor = reactive({
  //reactiveはオブジェクトを保持するためのもの
  // refを使ってもいいが、refを使うとオブジェクトの中の値を取得する際に.valueをつける必要がある
  //Proxyを使っているため、オブジェクトの中の値を取得する際に.valueをつける必要がない
  name: 'John Doe',
  age: 30,
  title: ref('Vue 3 Master'),
  sns: { twitter: '@john_doe_twitter', linkedin: '@john_doe_linkedin', github: '@john_doe_github' },
})

const vueURL = 'https://vuejs.org/'
const vueID = 'vuejs'

const count = ref(0)
function countDown() {
  count.value--
}
const eventName = 'keyup'
const userInput = ref('')

const evaluation = computed(() => {
  return count.value > 5 ? 'long' : 'short'
})
watch(count, (newValue, oldValue) => {
  console.log('count:', newValue)
  console.log('oldCount:', oldValue)
})
//watchは第一引数に監視対象、第二引数にコールバック関数を取る
//第二引数には監視対象の値が変更された時に実行される処理を書く
//個別監視できる,新しい値と古い値を取得できる
//第一引数には.valueをつけない
//リアクティブオブジェクトは扱い方気をつける
//第一引数にアロー関数を入れた場合は,その処理はwatchEffectと同じになる
//複数のデータを監視したときは配列で渡す
//第3引数のオブジェクトにimmediateオプションを使うことで初期値を取得できる

watchEffect(() => {
  console.log('count:', count.value)
})
//computedとほぼ同じ
//監視対象は関数内の値
//非同期処理は監視できない

const className = ref('red')
</script>
<template>
  <h1>price: {{ price }}</h1>
  <button @click="increment">price + 1</button>
  <button @click="decrement">price - 1</button>
  <h1>name:{{ instructor.name }}</h1>
  <h1>title: {{ instructor.title }}</h1>

  <div v-html="title"></div>
  // XSSに注意 //inputに入力された値を表示する際はv-htmlを使わない

  <div>
    <a :id="vueID" v-bind:href="vueURL">Vue.js</a>
    // v-bindは省略可能
  </div>

  //特定の属性に関してはnullやundefined、NaN数字などを設定することで属性を削除することができる

  <div>
    <a v-bind="{ id: vueID, href: vueURL }">Vue.js</a>
    //v-bindを複数の属性に適用する場合はオブジェクトを使う
  </div>

  <p>{{ count }}</p>
  <button v-on:click="countDown">button</button> //メソッドハンドラー
  <button @click="count++">button</button> //インラインハンドラー // 上のボタンは同じ機能
  //@clickはv-on:clickの省略形 //

  <button @click="count = $event.clientX">button</button>
  //$eventはイベントオブジェクト

  <button @click="$event.preventDefault()">button</button>
  //デフォルトのイベントをキャンセルする
  <a @click="$$event.stopPropagation()" href="https://vuejs.org"></a>
  //親要素のイベントをキャンセルする（伝播しない）

  <input @keyup="count++" type="text" />
  //キーボードのキーが押された時に発火するイベント
  <input @keyup.space="count++" type="text" />
  //スペースキーが押された時のみに発火するイベント
  <input @[eventName].space="count++" type="text" />
  //変数を使ってイベントを発火する // vindとonも書ける

  <input v-model="userInput" type="text" />
  //v-modelは双方向データバインディングで、input要素のvalue属性とinputイベントを自動的にバインドする

  <div>
    <p>{{ evaluation }}</p>
    // computedプロパティは関数内の値が変更された時に再度実行される //
    そのため、countの値が変更された時にevaluationの値も変更される
    //computedは読み取り専用のデータを返す //外部の状態を更新する処理や非同期処理は避ける
    //temとcomputedはリアクティブエフェクトを使っている //処理をまとめたいときはcomputedを使う
  </div>

  <div :class="{ red: true, 'bg-blue': true }">Hello</div>
  //動的なクラスの書き方 //オブジェクトを使うことで条件分岐ができる
  <div :class="[className]" :style="{ color: 'red', backgroundColor: 'blue' }">Hello</div>
  //配列を使うことで複数のクラスを適用できる
  //styleはオブジェクトを使うことで複数のスタイルを適用できる //styleはキャメルケースで書く
</template>
<style>
.red {
  color: red;
}
.bg-blue {
  background-color: blue;
}
</style>
